import { NextPage } from "next";
import Layout from "../../components/general/layout/layout.component";
import CorpPage from "../../components/views/corp/corpPage.component";

const index: NextPage = () => {
  return (
    <Layout>
      <CorpPage />
    </Layout>
  );
};

export default index;
