import './App.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Button} from '@shopify/polaris';
import {Card, DataTable, Page} from '@shopify/polaris';
import { useEffect } from 'react';
const axios = require('axios');
function App() {
 useEffect(() => {
    const fetchData = async () =>{
      const products = await axios.get('https://hailocal.omegatheme.com/sample-app/product.php?shop=ngo-van-hai.myshopify.com',{
        headers :{
          'Access-Control-Allow-Origin' : 'Bearer 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'
        }
      })
      console.log(products);
    }
    fetchData()
 }, []);
  return (
  <Page title="Sales by product">
      {/* <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
        />
      </Card> */}
    </Page>
  );
}

export default App;
