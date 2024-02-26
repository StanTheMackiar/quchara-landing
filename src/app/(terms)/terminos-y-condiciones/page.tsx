import TermsLayout from "@/Components/Layouts/TermsLayout";
import { getDocument } from "@/helpers/server/serverHelper";
import { TermsConditions } from "@/interfaces/editor";
import parse from "html-react-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Términos y condiciones - Quchara',
  description: 'Términos y condiciones de la aplicación Quchara, deben ser aceptados desde la app al momento del registro'
}


const page = async () => {
  const { terms } = await getDocument<TermsConditions>(
    "appSettings",
    "termsConditions"
  );

  return (
    <TermsLayout title="Terminos y condiciones">
      <div className="ql-editor mb-4">{parse(terms)}</div>
    </TermsLayout>
  );
};

export default page;
