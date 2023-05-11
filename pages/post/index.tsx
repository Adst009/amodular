import { NextPage } from "next";
import Layout from "../../components/general/layout/layout.component";
import Post from "../../components/views/post/post.component";





const Index: NextPage = () => {
    return (
        <>
        <Layout>
            
           <Post/>
            
        </Layout>
      
    
        </>
    );
};
  
  
  export default Index;