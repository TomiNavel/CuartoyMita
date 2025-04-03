"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

const CookiesBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const cookiesAccepted = Cookies.get("cookiesAccepted");
        if (!cookiesAccepted) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        Cookies.set("cookiesAccepted", "true", { expires: 365 });
        setShowBanner(false);
    };

    return (
        showBanner && (
            <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">
                    Usamos cookies para mejorar tu experiencia. Consulta nuestra{" "}
                    <Link href="/politica-cookies" className="underline text-primary-500 hover:text-primary-400">
                        política de cookies
                    </Link>
                    .
                </p>
                <button
                    onClick={acceptCookies}
                    className="text-primary-500  px-4 py-2 text-sm rounded-md mt-2 md:mt-0 hover:text-primary-400 transition"
                >
                    Aceptar
                </button>
            </div>
        )
    );
};

export default CookiesBanner;
