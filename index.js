'use strict';

const fetch = require('node-fetch');
let url='https://api.barcodelookup.com/v2/products?';

/**
 * Performs a barcodelookup request targeting the barcodelookup API.
 * @param {*} deconstructed object of permitted arguments.
 * @type {{lookup: module.exports.lookup}}
 */
module.exports = {
    lookup: ({ barcode: barcode, mpn: mpn, asin: asin, productName: productName, category: category,
                 search: search, page: page, geo: geo, formatted: formatted, key: key}) => {
        if (!key) {
            console.error('API-key is required to fulfill lookup.');
            return null;
        }
        if (barcode && mpn && asin && productName && category && search && page && geo && formatted) {
            url += 'key=' + key + '&barcode=' + barcode + '&mpn=' + mpn + '&asin=' + asin + '&productName=' + productName
                + '&category=' + category + '&search=' + search + '&page=' + page + '&geo=' + geo + '&formatted='
                + formatted;
        }
        if (barcode && mpn && asin && productName && category && search && page && geo) {
            url += 'key=' + key + '&barcode=' + barcode + '&mpn=' + mpn + '&asin=' + asin + '&productName=' + productName
                + '&category=' + category + '&search=' + search + '&page=' + page + '&geo=' + geo;
        }
        if (barcode && mpn && asin && productName && category && search && page) {
            url += 'key=' + key + '&barcode=' + barcode + '&mpn=' + mpn + '&asin=' + asin + '&productName=' + productName
                + '&category=' + category + '&search=' + search + '&page=' + page;
        }
        if (barcode && mpn && asin && productName && category && search) {
            url += 'key=' + key + '&barcode=' + barcode + '&mpn=' + mpn + '&asin=' + asin + '&productName=' + productName
                + '&category=' + category + '&search=' + search;
        }
        if (barcode && mpn && asin && productName && category) {
            url += 'key=' + key + '&barcode=' + barcode + '&mpn=' + mpn + '&asin=' + asin + '&productName=' + productName
                + '&category=' + category;
        }
        if (barcode && mpn && asin && productName) {
            url += 'key=' + key + '&barcode=' + barcode + '&mpn=' + mpn + '&asin=' + asin + '&productName=' + productName;
        }
        if (barcode && mpn && asin) {
            url += 'key=' + key + '&barcode=' + barcode + '&mpn=' + mpn + '&asin=' + asin;
        }
        if (barcode && mpn) {
            url += 'key=' + key + '&barcode=' + barcode + '&mpn=' + mpn;
        }
        if (barcode) {
           url += 'key=' + key + '&barcode=' + barcode;
        }
        // Fetch and return barcode data
        fetch(url).then(res => res.json()).then(body => {
            console.log(body);
            return body;
        });
    }
}
