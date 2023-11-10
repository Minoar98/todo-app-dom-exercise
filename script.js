/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/10/2023
 *
 */

 //select element & assign them to variable

 let newTask = document.querySelector('newrask');
 let form = document.querySelector('form');
 let todoUl = document.querySelector('#items');
 let completeUl = document.querySelector('.complete-list ul');

 //function
 let createtask = function(task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    let innertext = task;
    checkBox.type ='checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    return listItem;

 }

 let addTask =function(event){
    event.preventDefault();
    let listItem =createtask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value ="";
    //bind thr new list item to the complete list
     

}

 let BindInComplete = function(taskItem,checkBoxClick){
   let checkBox = taskItem.querySelector('input [type ="checkbox"]');
   checkBox.onchange =checkBoxClick;
 }

