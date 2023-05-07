angular.module('app').controller('appMainCtrl', function($scope){
    $scope.courses = [
      { name: "Item #1", featured: true,  published: new Date('1/2/2014')},
      { name: "Item #2", featured: false, published: new Date('1/3/2014')}, 
      { name: "Item #3", featured: true,  published: new Date('1/4/2014')},  
      { name: "Item #4", featured: false, published: new Date('1/5/2014')},  
      { name: "Item #5", featured: false, published: new Date('1/6/2014')},  
      { name: "Item #6", featured: false, published: new Date('1/7/2014')}  
    ];
})