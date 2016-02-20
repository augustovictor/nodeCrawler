var request = require('request');

// Parse and select HTML elements on the page
var cheerio = require('cheerio');

// Parse URLs
var URL = require('url-parse');

// Crawler
var pageToVisit = "http://www.anp.gov.br/preco/prc/Resumo_Por_Estado_Index.asp";

console.log('Visiting page' + pageToVisit);

request(pageToVisit, function (error, response, body) {
    'use strict';

    if (error) {
        console.log('Error ' + error);
    }

    // Check status code; (200 is HTTP OK)
    console.log('Status code: ' + response.statusCode);

    if (response.statusCode === 200) {

        // Parse document body
        var $ = cheerio.load(body);

        var captchaCode = '';

        for (var i = 1; i <= 4; i++) {
            captchaCode += $('label#letra' + i).text();
        }
        
//        captchaCode.join('');

        console.log('Captcha code: ' + captchaCode);

    }

});