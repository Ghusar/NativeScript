﻿import observableModule = require("data/observable");
import pagesModule = require("ui/page");
import model = require("./model");
import labelModule = require("ui/label");
import listPickerModule = require("ui/list-picker");
import datePickerModule = require("ui/date-picker");
import timePickerModule = require("ui/time-picker");

var viewModel: model.WebViewModel;
var page: pagesModule.Page;
var label: labelModule.Label;
var listPicker: listPickerModule.ListPicker;
var datePicker: datePickerModule.DatePicker;
var timePicker: timePickerModule.TimePicker;

export function onPageLoaded(args: observableModule.EventData) {
    viewModel = new model.WebViewModel();
    page = <pagesModule.Page>args.object;
    page.bindingContext = viewModel;

    viewModel.items = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    viewModel.selectedIndex = 5;

    label = page.getViewById<labelModule.Label>("label");
    listPicker = page.getViewById<listPickerModule.ListPicker>("listPicker");
    datePicker = page.getViewById<datePickerModule.DatePicker>("datePicker");
    timePicker = page.getViewById<timePickerModule.TimePicker>("timePicker");
}

export function onTap(args: observableModule.EventData) {
    console.log("onTap");
    viewModel.items = ["Male", "Female"];
}