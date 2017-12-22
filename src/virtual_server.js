function vs_test(){
  var to_write = document.getElementById("answer_sheet")
  to_write.innerText="fff"
  var arg1 = {
    "site_type":"study_site",
    "hall_type":"main library"
  };
  var arg2 = [20,30]
  var ret_value = getRoomStatus(arg1, arg2)
  var ans = ""
  for ( var i in ret_value)
    ans += i + ":" + ret_value[i]+"\n"
  //to_write.innerText=ans
}

function getRoomInfo( room )
{
  var list = getList();
  var room_info = list[room.site_type];
  if (room_info == undefined)
    return {};
  room_info = room_info[room.hall_type];
  if (room_info == undefined)
    return {};
  room_info  = room_info[room.room_id];
  if (room_info == undefined)
    return {};
  return room_info;
}

function getHallInfo(hall) {
  var list = getList();
  var halls = list[hall.site_type];
  if (halls == undefined)
    return {};
  halls = halls[hall.hall_type];
  if (halls == undefined)
    return {};
  var hall_list =[];
  for (room in halls)
  {
    var temp = {}
    temp[i]=halls[i]
    hall_list.push(temp)
  }
  return hall_list;
}

//the return is a array, whose element is a object, such as {"A215":"A"  }
function getRoomStatus(hall, time)
{
  var list = getList()
  alert(list)
  var err_out = document.getElementById("answer_sheet")
  err_out.innerText="getList wrong"
  err_out.innerText = "fff"
  for (var i in list)
  {
    err_out.innerText = "output"
    err_out.innerText += i;
    err_out.innerText += list[i];
    err_out.innerText += list.toString();
  }

  return
  err_out.innerText="get data wrong"
  err_out.innerText = list.toString()
  var rooms = list[hall.site_type]
  err_out.innerText = "rooms wrong"
  if (rooms == undefined)
    return {};
  err_out.innerText="get data2 wrong"
  rooms = rooms[hall.hall_type]
  if (rooms == undefined)
    return {};
  var ans = [];
  err_out.innerText="get ans wrong"
  for (i in rooms)
  {
    var room = rooms[i]
    var temp = {}
    temp[i]=""
    if (room.state == "A" && couldBook(room.ordered_time, time))
      temp[i] = "A"
    else if (room.state == "P")
      temp[i] = "P"
    else
      temp[i] = "O"
    ans.push(temp)
  }
  return ans
}

function couldBook(time_list, time)
{
  for (i in time_list)
  {
    if ((time[0]<i[1] && time[0]>i[0])||(time[1]<i[1] && time[1]>i[0]))
      return false;
  }
  return true;
}

function getList()
{
  import list from "./room_list.js"
  console.log(list);
  /*
  var reader = FileReader()
  var fso = new ActiveXObject("Scripting.FileSystemObject")
  var ts = fso.OpenTextFile("./room_list.js")
  var ans = ts.ReadAll()
  var json_out = document.getElementById("json_data")
  json_out.innerText = ans;
  json_out.innerText = "ggg"
  ans = eval('('+ans+')')
  return ans*/
}


