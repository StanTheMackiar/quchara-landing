
import { APP_STORE_URL, PLAY_STORE_URL } from "@/helpers/const/url";
import { Metadata } from "next";
import { headers } from "next/headers";
import { RedirectType, redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Descarga la App',
  description: 'Este enlace dectectara el SO de tu dispositivo móvil y te va a redirigir a la tienda correspondiente'
}

const page = async () => {

  const redirecToStore = async() => {
    'use server'

    const userAgent = headers().get('user-agent')
  
    if (userAgent?.match(/Android/i)) {
      redirect(PLAY_STORE_URL, RedirectType.replace)
    } else if (userAgent?.match(/iPhone|iPad|iPod/i)) {
      redirect(APP_STORE_URL, RedirectType.replace)
    } else {
      redirect('/', RedirectType.replace)
    }
  }

  await redirecToStore()

   return null
}

export default page