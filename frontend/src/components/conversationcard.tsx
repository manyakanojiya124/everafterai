import Link from "next/link";

import { MemoryPerson } from "@/lib/api";

export default function ConversationCard({
    person,
}:{
    person:MemoryPerson
}){

    return(

        <Link

            href={`/companions/${person.id}`}

            className="mb-2 flex items-center rounded-xl p-3 transition hover:bg-stone-100"

        >

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-stone-300 to-stone-400 text-lg font-bold text-white">

                {person.full_name[0]}

            </div>

            <div className="ml-4">

                <h2 className="font-semibold">

                    {person.full_name}

                </h2>

                <p className="text-sm text-stone-500">

                    {person.relationship}

                </p>

            </div>

        </Link>

    )

}