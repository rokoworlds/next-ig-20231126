import { getPlaiceholder } from "plaiceholder";
import type { Photo, ImagesResults } from "@/models/Images";

async function getBase64(imgUrl: string) {

        try {
            const response = await fetch(imgUrl);

            if (!response.ok) {
                throw new Error(`Failed to fetch image: ${response.status}
                 ${response.statusText}`);
            };

            const buffer = await response.arrayBuffer();

            const { base64 } = await getPlaiceholder(Buffer.from(buffer));
        
            return base64;
        } catch (error) {
            if (error instanceof Error) console.log(error.stack)
        }
}

export default async function addBlurredDataUrls(images:ImagesResults): Promise<Photo[]> {
    // Make all requests at once instead of awaiting each one - avoiding a waterfall. 
    const base64Promises = images.photos.map(photo => getBase64(photo.src.large) );

    // Resolve all requests in order
    const base64Results = await Promise.all(base64Promises);

    const photosWithBlur: Photo[] = images.photos.map((photo, i) => {
        photo.blurredDataUrl = base64Results[i];
        return photo;
    })

    return photosWithBlur;
}
