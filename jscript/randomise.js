function randomise(){
  //empty result
  $('#Result_Info').empty()
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
  var seed = parseInt($('#seed').val())

  // check if no null in required
  var requiredOK = true
  if (!sample) {
    requiredOK = false
  }
  if (group.length==0) {
    requiredOK = false
  }

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

  var randomiselist = []

  // the psudeo-random number generator. Refer to https://www.khanacademy.org/computer-programming/prng-test/5500564014432256
  var PRNG = function(seed){
      this._seed = seed % 2147483647;
      if (this._seed <= 0){ this._seed += 2147483646;}
  };

  PRNG.prototype.next = function(a,b){
      this._seed = this._seed * 16807 % 2147483647;
      if(arguments.length === 0){
          return this._seed/2147483647;
      }else if(arguments.length === 1){
          return (this._seed/2147483647)*a;
      }else{
          return (this._seed/2147483647)*(b-a)+a;
      }
  };

  // generate a seed if no seed
  if (isNaN(seed)) {
    var seed = Math.floor(Math.random() * (8999999999) + 1000000000)
  }

  var rng = new PRNG(seed);

  // check if blocks OK
  if (block.length>0) {
    // check if blocks are divisible by ammount of groups
    var grouplen = group.length
    var blocksizeOK = false
    for (var i = 0; i < block.length; i++) {
      if(block[i]%grouplen==0){
          blocksizeOK = true
      }
    }

    // check samplesize can be sorted into blocks
    var blockfitOK = false
    block_size_permute = permutator(block)
    if (blocksizeOK) {
      for (var i = 0; i < block_size_permute.length && !(blockfitOK); i++) {
        block_size_permutation = block_size_permute[i]
        var test_sample_baki = sample
        for (var j = 0; j < block_size_permutation.length && !(blockfitOK); j++) {
          block_size = block_size_permutation[j]
          test_sample_baki = test_sample_baki%block_size
          if (test_sample_baki === 0) {
            blockfitOK = true
            break
          }
        }
      }
    }

    var blockOK = blocksizeOK && blockfitOK

    //randomise
    if (blockOK == true && requiredOK == true) {
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
        return arr[Math.floor(rng.next() * arr.length)];
        // return arr[Math.floor(Math.random() * arr.length)];
      }

      // function to sum array
      function add(accumulator, a) {
          return accumulator + a;
      }

      //fuction to generate block list
      function generateblockarr(){
        var blockarr = []
        while (blockarr.reduce(add,0) < sample) {
          blockarr.push(random(block))
        }
        return blockarr
      }

      // keep trying to generate block list until the blocks fit sample perfectly
      var blockarr = []
      while (blockarr.reduce(add,0) != sample) {
        blockarr = generateblockarr()
      }

      //generate the randomise list
      randomiselist = []
      for (var i = 0; i < blockarr.length; i++) {
        item = blockarr[i]
        for (var j = 0; j < permutations.length; j++) {
          if (permutations[j]['length'] === item) {
            var permutepick = permutations[j]
          }

        }
        var lengthpick = item
        var blockpick = random(permutepick['perm'])
        for (var j = 0; j < blockpick.length; j++) {
          randomiselist.push([lengthpick,blockpick[j],i+1])
        }

      }

      //print index
      for (var i = 0; i < randomiselist.length; i++) {
        randomiselist[i].push(i+1)
      }

      //output in html
      $('#Result_Info').append('<p>Seed Number: ' + seed + '</p>')
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
          i = Math.floor(rng.next() * m--);

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
      $('#Result_Info').append('<p>Seed Number: ' + seed + '</p>')
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
