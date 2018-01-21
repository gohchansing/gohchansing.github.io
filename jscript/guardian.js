//algorithm
function report(){
var Rain = ""
var Pday = ""
  month=[["January",98,4095,1],
        ["February",113,3885,2],
        ["March",135,4301,3],
        ["April",220,4198,4],
        ["May",220,4466,5],
        ["June",210,4948,6],
        ["July",194,4491,7],
        ["August",230,4644,8],
        ["September",381,4484,9],
        ["October",351,4184,10],
        ["November",234,4307,11],
        ["December",130,3958,12]]
  for (i = 0; i < month.length; i++) {
    if (month[i][0]===$("#mon").text()){
      Rain = month[i+6][1],
      Pday = month[i+6][2],
      Mon = month[i+6][3],
      MonName = month[i+6][0]
    }
  }
  var Cefu = parseFloat($("#vCefuroxime").text());
  var Ceftr = parseFloat($("#vCeftriaxone").text());
  var Cefot = parseFloat($("#vCefotaxime").text());
  var Ceftaz = parseFloat($("#vCeftazidime").text());
  var Cefop = parseFloat($("#vCefoperazone").text());
  var Sulp = parseFloat($("#vSulperazone").text());
  var Cefep = parseFloat($("#vCefepime").text());
  var Cipro = parseFloat($("#vCiprofloxacin").text());
  var Imi = parseFloat($("#vImipenem").text());
  var Mero = parseFloat($("#vMeropenem").text());
  var Erta = parseFloat($("#vErtapenem").text());
  var Vanco = parseFloat($("#vVancomycin").text());
  var Tazo = parseFloat($("#vTazocin").text());
  var Colis = parseFloat($("#vColistin").text());
  var Gent = parseFloat($("#vGentamicin").text());
  var Ami = parseFloat($("#vAmikacin").text());
  var Una = parseFloat($("#vUnasyn").text());
  var Augm = parseFloat($("#vAugmentin").text());

  var CefuPer = ($("#CefuSV").val()/100)+1;
  var CeftrPer = ($("#CeftrSV").val()/100)+1;
  var CefotPer = ($("#CefotSV").val()/100)+1;
  var CeftazPer = ($("#CeftaSV").val()/100)+1;
  var CefopPer = ($("#CefopSV").val()/100)+1;
  var SulpPer = ($("#SulpSV").val()/100)+1;
  var CefepPer = ($("#CefepSV").val()/100)+1;
  var CiproPer = ($("#CiproSV").val()/100)+1;
  var ImiPer = ($("#ImiSV").val()/100)+1;
  var MeroPer = ($("#MeroSV").val()/100)+1;
  var ErtaPer = ($("#ErtaSV").val()/100)+1;
  var VancoPer = ($("#VancoSV").val()/100)+1;
  var TazoPer = ($("#TazoSV").val()/100)+1;
  var ColisPer = ($("#ColisSV").val()/100)+1;
  var GentPer = ($("#GentSV").val()/100)+1;
  var AmiPer = ($("#AmiSV").val()/100)+1;
  var UnaPer = ($("#UnaSV").val()/100)+1;
  var AugmPer = ($("#AugmSV").val()/100)+1;

  var CefuNew = (Cefu*CefuPer);
  var CeftrNew = (Ceftr*CeftrPer);
  var CefotNew = (Cefot*CefotPer);
  var CeftazNew = (Ceftaz*CeftazPer);
  var CefopNew = (Cefop*CefopPer);
  var SulpNew = (Sulp*SulpPer);
  var CefepNew = (Cefep*CefepPer);
  var CiproNew = (Cipro*CiproPer);
  var ImiNew = (Imi*ImiPer);
  var MeroNew = (Mero*MeroPer);
  var ErtaNew = (Erta*ErtaPer);
  var VancoNew = (Vanco*VancoPer);
  var TazoNew = (Tazo*TazoPer);
  var ColisNew = (Colis*ColisPer);
  var GentNew = (Gent*GentPer);
  var AmiNew = (Ami*AmiPer);
  var UnaNew = (Una*UnaPer);
  var AugmNew = (Augm*AugmPer);

  var Cefu0 = CefuNew
  var Cefu1 = CefuNew
  var Cefu2 = CefuNew
  var Cefu3 = CefuNew
  var Cefu4 = CefuNew
  var Cefu5 = CefuNew
  var Ceftr0 = CeftrNew
  var Ceftr1 = CeftrNew
  var Ceftr2 = CeftrNew
  var Ceftr3 = CeftrNew
  var Ceftr4 = CeftrNew
  var Ceftr5 = CeftrNew
  var Cefot0 = CefotNew
  var Cefot1 = CefotNew
  var Cefot2 = CefotNew
  var Cefot3 = CefotNew
  var Cefot4 = CefotNew
  var Cefot5 = CefotNew
  var Ceftaz0 = CeftazNew
  var Ceftaz1 = CeftazNew
  var Ceftaz2 = CeftazNew
  var Ceftaz3 = CeftazNew
  var Ceftaz4 = CeftazNew
  var Ceftaz5 = CeftazNew
  var Cefop0 = CefopNew
  var Cefop1 = CefopNew
  var Cefop2 = CefopNew
  var Cefop3 = CefopNew
  var Cefop4 = CefopNew
  var Cefop5 = CefopNew
  var Sulp0 = SulpNew
  var Sulp1 = SulpNew
  var Sulp2 = SulpNew
  var Sulp3 = SulpNew
  var Sulp4 = SulpNew
  var Sulp5 = SulpNew
  var Cefep0 = CefepNew
  var Cefep1 = CefepNew
  var Cefep2 = CefepNew
  var Cefep3 = CefepNew
  var Cefep4 = CefepNew
  var Cefep5 = CefepNew
  var Cipro0 = CiproNew
  var Cipro1 = CiproNew
  var Cipro2 = CiproNew
  var Cipro3 = CiproNew
  var Cipro4 = CiproNew
  var Cipro5 = CiproNew
  var Imi0 = ImiNew
  var Imi1 = ImiNew
  var Imi2 = ImiNew
  var Imi3 = ImiNew
  var Imi4 = ImiNew
  var Imi5 = ImiNew
  var Mero0 = MeroNew
  var Mero1 = MeroNew
  var Mero2 = MeroNew
  var Mero3 = MeroNew
  var Mero4 = MeroNew
  var Mero5 = MeroNew
  var Erta0 = ErtaNew
  var Erta1 = ErtaNew
  var Erta2 = ErtaNew
  var Erta3 = ErtaNew
  var Erta4 = ErtaNew
  var Erta5 = ErtaNew
  var Vanco0 = VancoNew
  var Vanco1 = VancoNew
  var Vanco2 = VancoNew
  var Vanco3 = VancoNew
  var Vanco4 = VancoNew
  var Vanco5 = VancoNew
  var Tazo0 = TazoNew
  var Tazo1 = TazoNew
  var Tazo2 = TazoNew
  var Tazo3 = TazoNew
  var Tazo4 = TazoNew
  var Tazo5 = TazoNew
  var Colis0 = ColisNew
  var Colis1 = ColisNew
  var Colis2 = ColisNew
  var Colis3 = ColisNew
  var Colis4 = ColisNew
  var Colis5 = ColisNew
  var Gent0 = GentNew
  var Gent1 = GentNew
  var Gent2 = GentNew
  var Gent3 = GentNew
  var Gent4 = GentNew
  var Gent5 = GentNew
  var Ami0 = AmiNew
  var Ami1 = AmiNew
  var Ami2 = AmiNew
  var Ami3 = AmiNew
  var Ami4 = AmiNew
  var Ami5 = AmiNew
  var Una0 = UnaNew
  var Una1 = UnaNew
  var Una2 = UnaNew
  var Una3 = UnaNew
  var Una4 = UnaNew
  var Una5 = UnaNew
  var Augm0 = AugmNew
  var Augm1 = AugmNew
  var Augm2 = AugmNew
  var Augm3 = AugmNew
  var Augm4 = AugmNew
  var Augm5 = AugmNew
  var Mrsa = -0.0062 * Cefu0 +
      0.0092 * Cefu1 +
      0.0034 * Cefu2 +
      0.0119 * Cefu4 +
     -0.0012 * Ceftr1 +
      0.0021 * Ceftr2 +
      0.001  * Ceftr4 +
     -0.0567 * Cefot1 +
      0.023  * Cefot4 +
      0.0576 * Cefot5 +
      0.0362 * Ceftaz0 +
     -0.0228 * Ceftaz1 +
      0.0163 * Ceftaz2 +
     -0.0289 * Ceftaz3 +
     -0.0176 * Ceftaz5 +
      0.0101 * Cefop1 +
      0.0071 * Cefop3 +
     -0.0065 * Cefop4 +
     -0.2388 * Sulp0 +
      0.1419 * Sulp1 +
     -0.0912 * Sulp2 +
     -0.1503 * Sulp3 +
      0.1253 * Sulp5 +
     -0.0076 * Cefep1 +
     -0.0072 * Cefep3 +
      0.0266 * Cipro1 +
      0.0378 * Cipro3 +
      0.0527 * Cipro4 +
      0.0681 * Cipro5 +
      0.0257 * Imi0 +
      0.0229 * Imi2 +
      0.0161 * Imi3 +
     -0.0401 * Imi4 +
      0.0064 * Mero1 +
     -0.0057 * Mero2 +
      0.0075 * Mero3 +
     -0.0062 * Mero4 +
     -0.0137 * Mero5 +
      0.204  * Erta0 +
      0.246  * Erta5 +
      0.0132 * Vanco0 +
      0.0119 * Vanco1 +
      0.0227 * Vanco2 +
      0.0183 * Vanco3 +
      0.0091 * Vanco4 +
      0.0244 * Vanco5 +
     -0.0018 * Tazo1 +
     -0.0032 * Tazo2 +
     -0.0017 * Tazo3 +
     -0.002  * Tazo5 +
      0.1301 * Colis0 +
     -0.2538 * Colis1 +
     -0.093  * Colis3 +
      0.2533 * Colis5 +
      0.0667 * Gent0 +
     -0.0465 * Gent1 +
     -0.0183 * Gent2 +
     -0.0355 * Gent3 +
     -0.045  * Gent4 +
      0.0281 * Ami1 +
      0.0583 * Ami2 +
      0.0298 * Ami4 +
     -0.004  * Una0 +
      0.0021 * Una1 +
     -0.0015 * Una2 +
      0.0009 * Una3 +
     -0.0033 * Augm0 +
     -0.007  * Augm1 +
      0.0046 * Augm3 +
      0.0047 * Augm4 +
      0.0038 * Augm5 +
     -0.0002 * Pday +
      0.0758 * Mon +
     -0.0021 * Rain +
    -14.5454
  var Ci = 56;
  var UpCi = parseInt(Mrsa*((Ci/100)+1))
  var DownCi = parseInt(Mrsa*((Ci/100)-1))
  var MrsaInt = parseInt(Mrsa);
  $("#report").text("Predicted cases of MRSA on " + MonName +": " + MrsaInt + " cases with a 95% confidence interval between " + UpCi + " and " + DownCi + ".");
};

$("#predict").click(report);

function reset(){
  $(".slider").val(0);
  location.reload();
}

$("#reset").click(reset);

function recom(){
  $("#CiprofloxacinSlide").val(-50);
  $("#CiproSV").val(-50);
  $("#PlanCipro").text(parseFloat($("#vCiprofloxacin").text())*(($("#CiproSV").val()/100)+1));
  var Cipro = parseFloat($("#vCiprofloxacin").text());
  var Ami = parseFloat($("#vAmikacin").text());
  var CiproPer = ($("#CiproSV").val()/100)+1;
  var CiproNew = (Cipro*CiproPer);
  var MrsaRecom = $("#RecomMRSA").val();
  var AmiNew = (MrsaRecom-(CiproNew*0.1852)-6.198)/0.1162;
  var AmiPerRecom = ((AmiNew-Ami)/Ami)*100;
  $("#AmiSV").val(AmiPerRecom);
  $("#PlanAmi").text(parseFloat($("#vAmikacin").text())*(($("#AmiSV").val()/100)+1));
}

$("#recom").click(recom);

//style
var sliderCefu = $("#CefuroximeSlide");
var outputCefu = $("#CefuSV");
var output2Cefu = $("#PlanCefu");
outputCefu.val(sliderCefu.val());
output2Cefu.text(parseFloat($("#vCefuroxime").text())*(($("#CefuSV").val()/100)+1));

sliderCefu.on('input', function() {
    outputCefu.val(sliderCefu.val());
    output2Cefu.text(parseFloat($("#vCefuroxime").text())*(($("#CefuSV").val()/100)+1));
})

outputCefu.on('input',function(){
  output2Cefu.text(parseFloat($("#vCefuroxime").text())*(($("#CefuSV").val()/100)+1));
})

var sliderCeftr = $("#CeftriaxoneSlide");
var outputCeftr = $("#CeftrSV");
var output2Ceftr = $("#PlanCeftr");
outputCeftr.val(sliderCeftr.val());
output2Ceftr.text(parseFloat($("#vCeftriaxone").text())*(($("#CeftaSV").val()/100)+1));

sliderCeftr.on('input', function() {
    outputCeftr.val(sliderCeftr.val());
    output2Ceftr.text(parseFloat($("#vCeftriaxone").text())*(($("#CeftaSV").val()/100)+1));
})

outputCeftr.on('input',function(){
  output2Ceftr.text(parseFloat($("#vCeftriaxone").text())*(($("#CeftaSV").val()/100)+1));
})

var sliderCefot = $("#CefotaximeSlide");
var outputCefot = $("#CefotSV");
var output2Cefot = $("#PlanCefot");
outputCefot.val(sliderCefot.val());
output2Cefot.text(parseFloat($("#vCefotaxime").text())*(($("#CefotSV").val()/100)+1));

sliderCefot.on('input', function() {
    outputCefot.val(sliderCefot.val());
    output2Cefot.text(parseFloat($("#vCefotaxime").text())*(($("#CefotSV").val()/100)+1));
})

outputCefot.on('input',function(){
  output2Cefot.text(parseFloat($("#vCefotaxime").text())*(($("#CefotSV").val()/100)+1));
})

var sliderCeftaz = $("#CeftazidimeSlide");
var outputCeftaz = $("#CeftaSV");
var output2Ceftaz = $("#PlanCefta");
outputCeftaz.val(sliderCeftaz.val());
output2Ceftaz.text(parseFloat($("#vCeftazidime").text())*(($("#CeftazSV").val()/100)+1));

sliderCeftaz.on('input', function() {
    outputCeftaz.val(sliderCeftaz.val());
    output2Ceftaz.text(parseFloat($("#vCeftazidime").text())*(($("#CeftazSV").val()/100)+1));
})

outputCeftaz.on('input',function(){
  output2Ceftaz.text(parseFloat($("#vCeftazidime").text())*(($("#CeftazSV").val()/100)+1));
})

var sliderCefop = $("#CefoperazoneSlide");
var outputCefop = $("#CefopSV");
var output2Cefop = $("#PlanCefop");
outputCefop.val(sliderCefop.val());
output2Cefop.text(parseFloat($("#vCefoperazone").text())*(($("#CefopSV").val()/100)+1));

sliderCefop.on('input', function() {
    outputCefop.val(sliderCefop.val());
    output2Cefop.text(parseFloat($("#vCefoperazone").text())*(($("#CefopSV").val()/100)+1));
})

outputCefop.on('input',function(){
  output2Cefop.text(parseFloat($("#vCefoperazone").text())*(($("#CefopSV").val()/100)+1));
})

var sliderSulp = $("#SulperazoneSlide");
var outputSulp = $("#SulpSV");
var output2Sulp = $("#PlanSulp");
outputSulp.val(sliderSulp.val());
output2Sulp.text(parseFloat($("#vSulperazone").text())*(($("#SulpSV").val()/100)+1));

sliderSulp.on('input', function() {
    outputSulp.val(sliderSulp.val());
    output2Sulp.text(parseFloat($("#vSulperazone").text())*(($("#SulpSV").val()/100)+1));
})

outputSulp.on('input',function(){
  output2Sulp.text(parseFloat($("#vSulperazone").text())*(($("#SulpSV").val()/100)+1));
})

var sliderCefep = $("#CefepimeSlide");
var outputCefep = $("#CefepSV");
var output2Cefep= $("#PlanCefep");
outputCefep.val(sliderCefep.val());
output2Cefep.text(parseFloat($("#vCefepime").text())*(($("#CefepSV").val()/100)+1));

sliderCefep.on('input', function() {
    outputCefep.val(sliderCefep.val());
    output2Cefep.text(parseFloat($("#vCefepime").text())*(($("#CefepSV").val()/100)+1));
})

outputCefep.on('input',function(){
  output2Cefep.text(parseFloat($("#vCefepime").text())*(($("#CefepSV").val()/100)+1));
})

var sliderCipro = $("#CiprofloxacinSlide");
var outputCipro = $("#CiproSV");
var output2Cipro = $("#PlanCipro");
outputCipro.val(sliderCipro.val());
output2Cipro.text(parseFloat($("#vCiprofloxacin").text())*(($("#CiproSV").val()/100)+1));

sliderCipro.on('input', function() {
    outputCipro.val(sliderCipro.val());
    output2Cipro.text(parseFloat($("#vCiprofloxacin").text())*(($("#CiproSV").val()/100)+1));
})

outputCipro.on('input',function(){
  output2Cipro.text(parseFloat($("#vCiprofloxacin").text())*(($("#CiproSV").val()/100)+1));
})

var sliderImi = $("#ImipenemSlide");
var outputImi = $("#ImiSV");
var output2Imi = $("#PlanImi");
outputImi.val(sliderImi.val());
output2Imi.text(parseFloat($("#vImipenem").text())*(($("#ImiSV").val()/100)+1));

sliderImi.on('input', function() {
    outputImi.val(sliderImi.val());
    output2Imi.text(parseFloat($("#vImipenem").text())*(($("#ImiSV").val()/100)+1));
})

outputImi.on('input',function(){
  output2Imi.text(parseFloat($("#vImipenem").text())*(($("#ImiSV").val()/100)+1));
})

var sliderMero = $("#MeropenemSlide");
var outputMero = $("#MeroSV");
var output2Mero = $("#PlanMero");
outputMero.val(sliderMero.val());
output2Mero.text(parseFloat($("#vMeropenem").text())*(($("#MeroSV").val()/100)+1));

sliderMero.on('input', function() {
    outputMero.val(sliderMero.val());
    output2Mero.text(parseFloat($("#vMeropenem").text())*(($("#MeroSV").val()/100)+1));
})

outputMero.on('input',function(){
  output2Mero.text(parseFloat($("#vMeropenem").text())*(($("#MeroSV").val()/100)+1));
})

var sliderErta = $("#ErtapenemSlide");
var outputErta = $("#ErtaSV");
var output2Erta = $("#PlanErta");
outputErta.val(sliderErta.val());
output2Erta.text(parseFloat($("#vErtapenem").text())*(($("#ErtaSV").val()/100)+1));

sliderErta.on('input', function() {
    outputErta.val(sliderErta.val());
    output2Erta.text(parseFloat($("#vErtapenem").text())*(($("#ErtaSV").val()/100)+1));
})

outputErta.on('input',function(){
  output2Erta.text(parseFloat($("#vErtapenem").text())*(($("#ErtaSV").val()/100)+1));
})

var sliderVanco = $("#VancomycinSlide");
var outputVanco = $("#VancoSV");
var output2Vanco = $("#PlanVanco");
outputVanco.val(sliderVanco.val());
output2Vanco.text(parseFloat($("#vVancomycin").text())*(($("#VancoSV").val()/100)+1));

sliderVanco.on('input', function() {
    outputVanco.val(sliderVanco.val());
    output2Vanco.text(parseFloat($("#vVancomycin").text())*(($("#VancoSV").val()/100)+1));
})

outputVanco.on('input',function(){
  output2Vanco.text(parseFloat($("#vVancomycin").text())*(($("#VancoSV").val()/100)+1));
})

var sliderTazo = $("#TazocinSlide");
var outputTazo = $("#TazoSV");
var output2Tazo = $("#PlanTazo");
outputTazo.val(sliderTazo.val());
output2Tazo.text(parseFloat($("#vTazocin").text())*(($("#TazoSV").val()/100)+1));

sliderTazo.on('input', function() {
    outputTazo.val(sliderTazo.val());
    output2Tazo.text(parseFloat($("#vTazocin").text())*(($("#TazoSV").val()/100)+1));
})

outputTazo.on('input',function(){
  output2Tazo.text(parseFloat($("#vTazocin").text())*(($("#TazoSV").val()/100)+1));
})

var sliderColis = $("#ColistinSlide");
var outputColis = $("#ColisSV");
var output2Colis = $("#PlanColis");
outputColis.val(sliderColis.val());
output2Colis.text(parseFloat($("#vColistin").text())*(($("#ColisSV").val()/100)+1));

sliderColis.on('input', function() {
    outputColis.val(sliderColis.val());
    output2Colis.text(parseFloat($("#vColistin").text())*(($("#ColisSV").val()/100)+1));
})

outputColis.on('input',function(){
  output2Colis.text(parseFloat($("#vColistin").text())*(($("#ColisSV").val()/100)+1));
})

var sliderGent = $("#GentamicinSlide");
var outputGent = $("#GentSV");
var output2Gent = $("#PlanGent");
outputGent.val(sliderGent.val());
output2Gent.text(parseFloat($("#vGentamicin").text())*(($("#GentSV").val()/100)+1));

sliderGent.on('input', function() {
    outputGent.val(sliderGent.val());
    output2Gent.text(parseFloat($("#vGentamicin").text())*(($("#GentSV").val()/100)+1));
})

outputGent.on('input',function(){
  output2Gent.text(parseFloat($("#vGentamicin").text())*(($("#GentSV").val()/100)+1));
})

var sliderAmi = $("#AmikacinSlide");
var outputAmi = $("#AmiSV");
var output2Ami = $("#PlanAmi");
outputAmi.val(sliderAmi.val());
output2Ami.text(parseFloat($("#vAmikacin").text())*(($("#AmiSV").val()/100)+1));

sliderAmi.on('input', function() {
    outputAmi.val(sliderAmi.val());
    output2Ami.text(parseFloat($("#vAmikacin").text())*(($("#AmiSV").val()/100)+1));
})

outputAmi.on('input',function(){
  output2Ami.text(parseFloat($("#vAmikacin").text())*(($("#AmiSV").val()/100)+1));
})

var sliderUna = $("#UnasynSlide");
var outputUna = $("#UnaSV");
var output2Una = $("#PlanUna");
outputUna.val(sliderUna.val());
output2Una.text(parseFloat($("#vUnasyn").text())*(($("#UnaSV").val()/100)+1));

sliderUna.on('input', function() {
    outputUna.val(sliderUna.val());
    output2Una.text(parseFloat($("#vUnasyn").text())*(($("#UnaSV").val()/100)+1));
})

outputUna.on('input',function(){
  output2Una.text(parseFloat($("#vUnasyn").text())*(($("#UnaSV").val()/100)+1));
})

var sliderAugm = $("#AugmentinSlide");
var outputAugm = $("#AugmSV");
var output2Augm = $("#PlanAugm");
outputAugm.val(sliderAugm.val());
output2Augm.text(parseFloat($("#vAugmentin").text())*(($("#AugmSV").val()/100)+1));

sliderAugm.on('input', function() {
    outputAugm.val(sliderAugm.val());
    output2Augm.text(parseFloat($("#vAugmentin").text())*(($("#AugmSV").val()/100)+1));
})

outputAugm.on('input',function(){
  output2Augm.text(parseFloat($("#vAugmentin").text())*(($("#AugmSV").val()/100)+1));
})
