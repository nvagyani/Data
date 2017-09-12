// Define the 'heroStoreApp' module
var heroStoreApp = angular.module('heroStoreApp', []);

// Define the 'ProductListController' controller on the 'heroStoreApp' module
heroStoreApp.controller('ProductListController', function ProductListController($scope) {
    $scope.products = [
            {
                "title": "Blue Stripe Stoneware Plate",
                "brand": "Kiriko",
                "price": 40,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                "image": "./media/blue-stripe-stoneware-plate.jpg"
            },
            {
                "title": "Hand Painted Blue Flat Dish",
                "brand": "Kiriko",
                "price": 28,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
                "image": "./media/hand-painted-blue-flat-dish.jpg"
            },
            {
                "title": "Heme",
                "brand": "Dust & Form",
                "price": 52,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
                "image": "./media/heme.jpg"
            },
            {
                "title": "Mashiko-Yaki Green Small Plate",
                "brand": "Kiriko",
                "price": 28,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                "image": "./media/mashiko-yaki-green-small-plate.jpg"
            },
            {
                "title": "Mashiko-Yaki Indigo Small Plate",
                "brand": "Kiriko",
                "price": 28,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                "image": "./media/mashiko-yaki-indigo-small-plate.jpg"
            },
            {
                "title": "Mashiko-Yaki Saucer",
                "brand": "Kiriko",
                "price": 18,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                "image": "./media/mashiko-yaki-saucer.jpg"
            }
        ];
});