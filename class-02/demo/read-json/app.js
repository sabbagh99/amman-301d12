'use strict';

function Dog(name, img_url, hobbies) {
  this.name = name;
  this.img_url = img_url;
  this.hobbies = hobbies;
}

Dog.prototype.render = function () {
  let dogSection = $('.dog-template').clone();
  $('main').append(dogSection);
  dogSection.find('h2').text(this.name);
  dogSection.find('img').attr('src', this.img_url);
  dogSection.find('p').text(this.hobbies);
  dogSection.removeClass('dog-template');
};

function populateDogsData() {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };

  $.ajax('data.json', ajaxSettings)
    .then(data => {
      data.forEach(element => {
        let jsDog = new Dog(element.name, element.image_url,element.hobbies);
        jsDog.render();
      });
    });
}


$('document').ready(populateDogsData);














// function Dog(dog) {
//   this.name = dog.name;
//   this.image_url = dog.image_url;
//   this.hobbies = dog.hobbies;
// }

// // Using a clone
// Dog.prototype.render = function () {
//   let $dogClone = $('.dog-template').clone();
//   $('main').append($dogClone);
//   $dogClone.find('h2').text(this.name);
//   $dogClone.find('img').attr('src', this.image_url);
//   $dogClone.find('p').text(this.hobbies);
//   $dogClone.removeClass('dog-template');
//   // $dogClone.attr('class', this.name);
// };

// Dog.readJson = () => {
//   const ajaxSettings = {
//     method: 'get',
//     dataType: 'json'
//   };

//   $.ajax('data.json', ajaxSettings)
//     .then(data => {
//       data.forEach(item => {
//         let dog = new Dog(item);
//         console.log(dog);
//         dog.render();
//       });
//     });
// };



