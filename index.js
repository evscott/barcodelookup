'use strict';

const fetch = require('node-fetch');
let baseUrl = 'https://api.barcodelookup.com/v2/';

module.exports = {
    /**
     * Performs a rate-limit query to resolve rate limits of associated api-key.
     * @param key associated with limits
     * @returns {Promise<T | {data: any, statusCode: number}>|null} data
     * is response payload, statusCode is response status code.
     */
    rateLimits: ({ key: key }) => {
        let url = baseUrl + 'rate-limits?key=' + key;

        return fetch(url)
            .then((response) => {
                switch (response.status) {
                    case 200:
                        return Promise.all([response.status, response.json()]);
                        break;
                    default:
                        return Promise.all([
                            response.status,
                            response.statusText
                        ]);
                }
            })
            .then((res) => {
                return { statusCode: res[0], data: res[1] };
            })
            .catch((error) => {
                return { statusCode: 400, data: error };
            });
    },
    /**
     * Performs a barcode lookup request targeting the official barcodelookup
     * api.
     * @param barcode optional argument.
     * @param mpn optional argument.
     * @param asin optional argument.
     * @param productName optional argument.
     * @param category optional argument.
     * @param search optional argument.
     * @param page optional argument.
     * @param geo optional argument.
     * @param formatted optional argument.
     * @param key optional argument.
     * @returns {Promise<T | {data: any, statusCode: number}>|null} data
     * is response payload, statusCode is response status code.
     */
    lookup: ({
        barcode: barcode,
        mpn: mpn,
        asin: asin,
        productName: productName,
        category: category,
        search: search,
        page: page,
        geo: geo,
        formatted: formatted,
        key: key
    }) => {

        let url = baseUrl + 'products?';

        if (
            barcode &&
            mpn &&
            asin &&
            productName &&
            category &&
            search &&
            page &&
            geo &&
            formatted
        ) {
            url +=
                'key=' +
                key +
                '&barcode=' +
                barcode +
                '&mpn=' +
                mpn +
                '&asin=' +
                asin +
                '&productName=' +
                productName +
                '&category=' +
                category +
                '&search=' +
                search +
                '&page=' +
                page +
                '&geo=' +
                geo +
                '&formatted=' +
                formatted;
        }
        if (
            barcode &&
            mpn &&
            asin &&
            productName &&
            category &&
            search &&
            page &&
            geo
        ) {
            url +=
                'key=' +
                key +
                '&barcode=' +
                barcode +
                '&mpn=' +
                mpn +
                '&asin=' +
                asin +
                '&productName=' +
                productName +
                '&category=' +
                category +
                '&search=' +
                search +
                '&page=' +
                page +
                '&geo=' +
                geo;
        }
        if (
            barcode &&
            mpn &&
            asin &&
            productName &&
            category &&
            search &&
            page
        ) {
            url +=
                'key=' +
                key +
                '&barcode=' +
                barcode +
                '&mpn=' +
                mpn +
                '&asin=' +
                asin +
                '&productName=' +
                productName +
                '&category=' +
                category +
                '&search=' +
                search +
                '&page=' +
                page;
        }
        if (barcode && mpn && asin && productName && category && search) {
            url +=
                'key=' +
                key +
                '&barcode=' +
                barcode +
                '&mpn=' +
                mpn +
                '&asin=' +
                asin +
                '&productName=' +
                productName +
                '&category=' +
                category +
                '&search=' +
                search;
        }
        if (barcode && mpn && asin && productName && category) {
            url +=
                'key=' +
                key +
                '&barcode=' +
                barcode +
                '&mpn=' +
                mpn +
                '&asin=' +
                asin +
                '&productName=' +
                productName +
                '&category=' +
                category;
        }
        if (barcode && mpn && asin && productName) {
            url +=
                'key=' +
                key +
                '&barcode=' +
                barcode +
                '&mpn=' +
                mpn +
                '&asin=' +
                asin +
                '&productName=' +
                productName;
        }
        if (barcode && mpn && asin) {
            url +=
                'key=' +
                key +
                '&barcode=' +
                barcode +
                '&mpn=' +
                mpn +
                '&asin=' +
                asin;
        }
        if (barcode && mpn) {
            url += 'key=' + key + '&barcode=' + barcode + '&mpn=' + mpn;
        }
        if (barcode) {
            url += 'key=' + key + '&barcode=' + barcode;
        }

        return fetch(url)
            .then((response) => {
                switch (response.status) {
                    case 200:
                        return Promise.all([response.status, response.json()]);
                        break;
                    default:
                        return Promise.all([
                            response.status,
                            response.statusText
                        ]);
                }
            })
            .then((res) => {
                return { statusCode: res[0], data: res[1] };
            })
            .catch((error) => {
                return { statusCode: 400, data: error };
            });
    }
};
