import { TermsLayout } from "@/Components/Layouts";
import { getDocument } from "@/helpers/server/serverHelper";
import { Policies } from "@/interfaces/editor";
import parse from "html-react-parser";

const page = async () => {
  const { policies } = await getDocument<Policies>("appSettings", "policies");

  return (
    <TermsLayout title="Política de privacidad">
      <div className="ql-editor mb-4">{parse(policies)}</div>
    </TermsLayout>
  );
};

export default page;
