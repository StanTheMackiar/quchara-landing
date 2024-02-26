"use client";

import TermsLayout from "@/Components/Layouts/TermsLayout";
import { getDocument } from "@/helpers/server/serverHelper";
import { TermsConditions } from "@/interfaces/editor";
import parse from "html-react-parser";

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
