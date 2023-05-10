import { NextPage } from "next";
import Layout from "../../components/general/layout/layout.component";
import Blog from "../../components/views/blog/blog.component";





const Index: NextPage = () => {
    return (
        <>
        <Layout>
            
           <Blog />     
            
        </Layout>
      
    
        </>
    );
};
  
  
  export default Index;