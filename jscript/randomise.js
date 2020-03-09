function randomise(){
  //empty result
    $('#result_thead').empty()
    $('#result_tbody').empty()

  // get settings
  var sample = parseInt($('#sample').val())
  var group = $('#group').val().split(",")
  if (group[group.length-1]==""){
    group.pop()
  }
  var block = $('#block').val().split(",")
  if (group[group.length-1]==""){
    group.pop()
  }
  for (var i = 0; i < block.length; i++) {
    block[i]=parseInt(block[i])
  }
  block = block.filter(function (value) {
    return !Number.isNaN(value);
  })

  // check if no null in required
  var requiredOK = true
  if (!sample) {
    requiredOK = false
  }
  if (group.length==0) {
    requiredOK = false
  }

  var randomiselist = []

  // check if blocks are divisible by ammount of groups
  if (block.length>0) {
    var blockOK = true
    var grouplen = group.length
    for (var i = 0; i < block.length; i++) {
      if(block[i]%grouplen>0){
          blockOK = false
      }
    }

    //randomise
    if (blockOK == true && requiredOK == true) {
      //permutation function https://stackoverflow.com/questions/9960908/permutations-in-javascript
      function permutator(inputArr) {
        var results = [];

        function permute(arr, memo) {
          var cur, memo = memo || [];

          for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
              results.push(memo.concat(cur));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
          }

          return results;
        }

        return permute(inputArr);
      }

      //generate permutations
      var permutations = []
      for (var i = 0; i < block.length; i++) {
        var rep = block[i]/grouplen
        var inputArr = []
        for (var j = 0; j < rep; j++) {
          for (var k = 0; k < group.length; k++) {
            inputArr.push(group[k])
          }
        }
        permutations.push({length:block[i],perm:permutator(inputArr)})
      }

      //random pick function
      function random(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }

      randomiselist = []
      var blocknum = 1
      while (sample>randomiselist.length) {
        var permutepick = random(permutations)
        var lengthpick = permutepick['length']
        var blockpick = random(permutepick['perm'])
        for (var i = 0; i < blockpick.length; i++) {
          randomiselist.push([lengthpick,blockpick[i],blocknum])
        }
        blocknum ++
      }

      //remove extra
      var extra = randomiselist.length - sample;
      for (var i = 0; i < extra; i++) {
        randomiselist.pop()
      }

      //print index
      for (var i = 0; i < randomiselist.length; i++) {
        randomiselist[i].push(i+1)
      }

      //output in html
      $('#result_thead').append('<tr><th scope="col">#</th><th scope="col">Block#</th><th scope="col">Block Size</th><th scope="col">Group</th></tr>')

      for (var i = 0; i < randomiselist.length; i++) {
        $('#result_tbody').append(
          '<tr><th scope="row">' + randomiselist[i][3] + '</th>' +
          '<td>' + randomiselist[i][2] + '</td>' +
          '<td>' + randomiselist[i][0] + '</td>' +
          '<td>' + randomiselist[i][1] + '</td></tr>'
        )
      }
    }
  }else{
    if (requiredOK == true) {
      randomiselist = []
      var rep = sample/group.length
      for (var i = 0; i < rep; i++) {
        for (var j = 0; j < group.length; j++) {
          randomiselist.push([group[j]])
        }
      }

      //shuffle method https://bost.ocks.org/mike/shuffle/
      function shuffle(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);

          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }

        return array;
      }

      randomiselist = shuffle(randomiselist)

      //remove extra
      var extra = randomiselist.length - sample;
      for (var i = 0; i < extra; i++) {
        randomiselist.pop()
      }

      //print index
      for (var i = 0; i < randomiselist.length; i++) {
        randomiselist[i].push(i+1)
      }

      //output in html
      $('#result_thead').append('<tr><th scope="col">#</th><th scope="col">Group</th></tr>')

      for (var i = 0; i < randomiselist.length; i++) {
        $('#result_tbody').append(
          '<tr><th scope="row">' + randomiselist[i][1] + '</th>' +
          '<td>' + randomiselist[i][0] + '</td></tr>'
        )
      }
    }
  }
}
