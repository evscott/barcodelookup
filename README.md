![David](https://david-dm.org/evscott/barcodelookup.svg)
# barcodelookup

An installable Node.js package that easily handles [barcodelookup](https://www.barcodelookup.com/) requests.

### Prerequisites

1. Ensure that you have a valid API key provided by [barcodelookup](https://www.barcodelookup.com/api#sign-up).

2. Ensure that Node.js and npm is installed on your machine.

```
node --version // v11.14.0
npm --version // 6.9.0
```

### Installing

Inside of your projects root directory, install the barcodelookup package using npm.

```
npm install barcodelookup
```

## How to use

Inside any file of your project, import the barcodelookup package from node_modules.

```
const bc = require('barcodelookup');
```

To make a request, call either [lookup](#lookup) or [rateLimits](#ratelimits) and provide the necessary arguments in a key-value object format to fulfill the request.

```
bc.lookup({
        key: 'your api key',
        barcode: 'some barcode to lookup'
    });

bc.rateLimits({
        key: 'your api key'
    });
```

## Functions available
### lookup
`lookup` uses destructured parameters to accept arguments marked by the keys which barcodelookup accepts: 
i.e. barcode, mpn, asin, key, etc.

```
lookup({ barcode: barcode, mpn: mpn, asin: asin, productName: productName, category: category, 
            search: search, page: page, geo: geo, formatted: formatted, key: key })
```

`lookup` returns an object as a promise. The object will contain a status code 
and either a data packet of products or an error message.

```
{ statusCode: 200, data: { products: [ [Object] ] } }
...
{ statusCode: 403, data: 'Forbidden' }
...
{ statusCode: 404, data: 'Not Found' }
...
{ statusCode: 429, data: 'Too Many Requests' }
```

Example product object:
```
{ products:
   [ { barcode_number: '063652852403',
       barcode_type: 'UPC',
       barcode_formats: 'UPC 063652852403, EAN 0063652852403',
       mpn: '063652852403',
       model: '',
       asin: '',
       product_name: 'Crayola 24 Ultra Clean Washable Markers by Crayola',
       title: 'Crayola 24 Ultra Clean Washable Markers by Crayola',
       category:
        'Sporting Goods > Outdoor Recreation > Golf > Golf Ball Markers',
       manufacturer: 'Crayola',
       brand: 'Crayola',
       label: '',
       author: '',
       publisher: '',
       artist: '',
       actor: '',
       director: '',
       studio: '',
       genre: '',
       audience_rating: '',
       ingredients: '',
       nutrition_facts: '',
       color: '',
       format: '',
       package_quantity: '',
       size: '',
       length: '',
       width: '',
       height: '',
       weight: '',
       release_date: '',
       description:
        'Crayola Washable markers are now Ultra Washable! Washable from skin, clothing and now from walls! Washability you can trust from the world&apos;s most washable marker!Markers that deliver superb colour coverage and lay down. The markers come in various degrees of washability and a wide variety of marker tips.Fine tip for outlining, writing and drawingInk washes easily from skin and fabricsMachine washable.',
       features: [],
       images: [Array],
       stores: [Array],
       reviews: [] } ] }
```

See the official [barcodelookup api documentation](https://www.barcodelookup.com/api) for more information on returned fields.

### rateLimits
`rateLimits` queries the barcodelookup account registry to return account details pertaining to an api-key.

```
rateLimits({ key: key })
```

`rateLimits` returns an object as a promise. The object will contain a status code 
and either a data packet of account information or an error message.

```
{ statusCode: 200,
  data:
   { allowed_calls_per_month: '50',
     remaining_calls_per_month: '48',
     allowed_calls_per_minute: '50',
     remaining_calls_per_minute: '49' } }
...
{ statusCode: 403, data: 'Forbidden' }
...
```

See the official [barcodelookup api documentation](https://www.barcodelookup.com/api) for more information on returned fields.

## Built With

* [barcodelookup](https://www.barcodelookup.com/) - The barcode database.
* [node-fetch](https://www.npmjs.com/package/node-fetch) - The HTTP request framework.

## Authors

* **[Eliot Scott](https://github.com/evscott)** - *Initial work*
* **[Robin C Samuel](https://github.com/robincsamuel)** - *Second contributor*

See also the list of [contributors](https://github.com/evscott/barcodelookup/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
