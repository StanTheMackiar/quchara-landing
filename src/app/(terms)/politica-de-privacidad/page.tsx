import { TermsLayout } from "@/Components/Layouts";
import { getDocument } from "@/helpers/server/serverHelper";
import { Policies } from "@/interfaces/editor";
import parse from "html-react-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Política de privacidad - Quchara',
  description: 'Política de privacidad de la aplicación Quchara, deben ser aceptados desde la app al momento del registro',
}

const page = async () => {
  const { policies } = await getDocument<Policies>("appSettings", "policies");

  return (
    <TermsLayout title="Política de privacidad">
      <section className="ql-editor mb-4">{parse(policies)}</section>
    </TermsLayout>
  );
};

export default page;
