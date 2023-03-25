// Usage: Go to the first day of the timesheet and paste this code into the console.

function fill_out_one_day_timesheet() {
  const time_in = document.querySelector("#timein_input_id");
  const time_out = document.querySelector("#timeout_input_id");

  time_in.value = "4:00";
  time_out.value = "6:00";

  const time_in_ampm = document.getElementsByName("TimeInAm")[0];
  const time_out_ampm = document.getElementsByName("TimeOutAm")[0];

  time_in_ampm.value = "PM";
  time_out_ampm.value = "PM";

  const save_button = get_input("Save");
  if (save_button === null) {
    return;
  }

  save_button.click();

  const next_day_button = get_input("Next Day");

  if (next_day_button === undefined) {
    const time_sheet_button = get_input("Time Sheet");
    time_sheet_button.click();
    return;
  }

  next_day_button.click();
}

function get_input(val) {
  const all_inputs = document.getElementsByTagName("input");
  let target_input;
  for (let input of all_inputs) {
    if (input.value === val) {
      target_input = input;
    }
  }

  if (target_input !== null) {
    return target_input;
  } else {
    console.log("Save button not found");
  }
}

function fill_out_entire_timesheet() {
  let next_button = get_input("Next Day");
  const current_date = document.querySelector(
    "body > div.pagebodydiv > form > table:nth-child(9) > tbody > tr:nth-child(1) > td.dedefault"
  ).textContent;
  const date = new Date(current_date);
  let utc_day = date.getUTCDay();
  if (utc_day >= 1 && utc_day <= 5) {
    fill_out_one_day_timesheet();
  } else {
    next_button.click();
  }
}

fill_out_entire_timesheet();
