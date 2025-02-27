import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Card({ item }) {
    const { locale } = useRouter();
    const { t } = useTranslation("common");
    return (
        <Link href={`/blogs/${item.title}`}>
            <div className=' group max-w-[300px] cursor-pointer overflow-hidden rounded-lg bg-[white] font-primary shadow-xl transition duration-300  hover:scale-[102%]  hover:shadow-2xl'>
                <div className='relative aspect-video overflow-hidden rounded-md transition-all '>
                    <Image
                        layout='fill'
                        objectFit='cover'
                        className='abso h-full w-full'
                        src={item.image}
                        alt={item.imageAlt}
                    />
                    <div className=' absolute top-32 h-9 w-24  translate-y-2 bg-primary'>
                        <p className='px-2 py-1 text-sm text-[white]'>
                            {item.date}
                        </p>
                    </div>
                </div>
                <div
                    className={`py-4 px-3 ${
                        locale === "ar" ? "text-right" : null
                    }`}
                >
                    <h2 className='text-brand-primary dark:text-white mt-2 text-lg font-semibold tracking-normal'>
                        <span
                            className=' dark:from-purple-800 dark:to-purple-900 bg-gradient-to-r from-[#F07167] to-[#fceceb] bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          text-lg
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'
                        >
                            {t(`blogs.headerBlg${item.id}`)}{" "}
                        </span>
                    </h2>
                    <p className='text-gray-700 mt-2 text-base '>
                        {t(`blogs.contentBlg${item.id}`).slice(0, 100) + "..."}
                    </p>
                </div>
            </div>
        </Link>
    );
}
