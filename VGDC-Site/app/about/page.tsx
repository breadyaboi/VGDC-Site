import { Navbar } from "@/components/navbar";
import Image from "next/image";
import filler from "@/public/filler_image.jpg";
export default function About()
{
    return(
        <div className="margin=0 padding=0"> {/* Page container*/}
            <Navbar/>
            <div>{/*Non-header container*/}
                <div className="flex items-center justify-center pt-20 pb-10">{/* Title Container*/}
                    <h1 className="font-outfit font-bold text-4xl text-red-600"> 
                        Who We Are
                    </h1>
                </div>
                <div className="font-outfit font-bold pb-5">{/* Subheader 1 container*/}
                    <h1 className="text-gray-500 text-2xl py-5">
                        Sub Header 1
                    </h1>
                    <p className="text-gray-500 text-xl">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
                    </p>
                </div>
                <div className="flex">{/* Subheader 2 Split container*/}
                    <div className="w-1/2">{/*left container (image)*/}
                        <Image 
                        src={filler}
                        alt="cat"
                        objectFit="contain"
                        width={500}
                        height={400}/>
                    </div>
                    <div className="w-1/2 font-outfit font-bold">{/* right container (text)*/}
                        <h1 className="text-gray-500 text-2xl py-5">
                            Sub Header 2
                        </h1>
                        <p className="text-gray-500 text-xl">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
                        </p>
                    </div>
                </div>
                <div className="font-outfit font-bold pb-5">{/* Subheader 3 container*/}
                    <h1 className="text-gray-500 text-2xl py-5">
                        Sub Header 3
                    </h1>
                    <p className="text-gray-500 text-xl">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
                    </p>
                </div>
                <div className="font-outfit font-bold">{/* Subheader 2 container*/}
                    <h1 className="text-gray-500 text-2xl py-5">
                        Sub Header 4
                    </h1>
                    <p className="text-gray-500 text-xl pb-5">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
                    </p>
                </div>
            </div>
        </div>
    )
}