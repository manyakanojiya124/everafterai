import { MessageCircle } from "lucide-react";

export default function EmptyChat(){

    return(

        <div className="flex flex-1 items-center justify-center">

            <div className="text-center">

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow">

                    <MessageCircle
                        size={42}
                    />

                </div>

                <h1 className="mt-8 text-4xl font-bold">

                    EverAfter

                </h1>

                <p className="mx-auto mt-5 max-w-md text-stone-500">

                    Preserve memories.

                    Share stories.

                    Continue meaningful conversations.

                </p>

            </div>

        </div>

    )

}