function myFunction(){
    //semester 1
    const highgp = 10
    var sgp11 = document.getElementById("sgp11").value
    var sgp12 = document.getElementById("sgp12").value
    var sgp13 = document.getElementById("sgp13").value
    var sgp14 = document.getElementById("sgp14").value
    var sgp15 = document.getElementById("sgp15").value
    var sgp16 = document.getElementById("sgp16").value
    var sgp17 = document.getElementById("sgp17").value
    var sgp18 = document.getElementById("sgp18").value
    var sgp19 = document.getElementById("sgp19").value

    var scp11 = document.getElementById("scp11").value
    var scp12 = document.getElementById("scp12").value
    var scp13 = document.getElementById("scp13").value
    var scp14 = document.getElementById("scp14").value
    var scp15 = document.getElementById("scp15").value
    var scp16 = document.getElementById("scp16").value
    var scp17 = document.getElementById("scp17").value
    var scp18 = document.getElementById("scp18").value
    var scp19 = document.getElementById("scp19").value

    var so1 = sgp11*scp11+sgp12*scp12+sgp13*scp13+sgp14*scp14+sgp15*scp15+sgp16*scp16+sgp17*scp17+sgp18*scp18+sgp19*scp19
    var st1 = highgp*scp11+highgp*scp12+highgp*scp13+highgp*scp14+highgp*scp15+highgp*scp16+highgp*scp17+highgp*scp18+highgp*scp19

   var totalmark1 = document.getElementById("totalmark1")
   var obtainedmark1 = document.getElementById("obtainedmark1")
   var cgpa1 = document.getElementById("cgpa1")
   var percentage1 = document.getElementById("percentage1")
   var cgpa11 = so1/st1*10
   totalmark1.textContent = "Total Marks : "+st1
   obtainedmark1.textContent = "Obtained Marks : "+so1
   cgpa1.textContent = "Marks in CGPA : "+ cgpa11.toFixed(2)
   percentage1.textContent = "Marks in Percentage : "+ Math.round(so1/st1*100)+"%"

   //semester 2

   var sgp21 = document.getElementById("sgp21").value
   var sgp22 = document.getElementById("sgp22").value
   var sgp23 = document.getElementById("sgp23").value
   var sgp24 = document.getElementById("sgp24").value
   var sgp25 = document.getElementById("sgp25").value
   var sgp26 = document.getElementById("sgp26").value
   var sgp27 = document.getElementById("sgp27").value
   var sgp28 = document.getElementById("sgp28").value
   var sgp29 = document.getElementById("sgp29").value

   var scp21 = document.getElementById("scp21").value
   var scp22 = document.getElementById("scp22").value
   var scp23 = document.getElementById("scp23").value
   var scp24 = document.getElementById("scp24").value
   var scp25 = document.getElementById("scp25").value
   var scp26 = document.getElementById("scp26").value
   var scp27 = document.getElementById("scp27").value
   var scp28 = document.getElementById("scp28").value
   var scp29 = document.getElementById("scp29").value
   
   var so2 = sgp21*scp21+sgp22*scp22+sgp23*scp23+sgp24*scp24+sgp25*scp25+sgp26*scp26+sgp27*scp27+sgp28*scp28+sgp29*scp29
   var st2 = highgp*scp21+highgp*scp22+highgp*scp23+highgp*scp24+highgp*scp25+highgp*scp26+highgp*scp27+highgp*scp28+highgp*scp29
   var totalmark2 = document.getElementById("totalmark2")
   var obtainedmark2 = document.getElementById("obtainedmark2")
   var cgpa2 = document.getElementById("cgpa2")
   var percentage2 = document.getElementById("percentage2")
   var cgpa22 = so2/st2*10
   totalmark2.textContent = "Total Marks : "+st2
   obtainedmark2.textContent = "Obtained Marks : "+so2
   cgpa2.textContent = "Marks in CGPA : "+ cgpa22.toFixed(2)
   percentage2.textContent = "Marks in Percentage : "+ Math.round(so2/st2*100)+"%"


   //semester 3
   var sgp31 = document.getElementById("sgp31").value
   var sgp32 = document.getElementById("sgp32").value
   var sgp33 = document.getElementById("sgp33").value
   var sgp34 = document.getElementById("sgp34").value
   var sgp35 = document.getElementById("sgp35").value
   var sgp36 = document.getElementById("sgp36").value
   var sgp37 = document.getElementById("sgp37").value
   var sgp38 = document.getElementById("sgp38").value
   var sgp39 = document.getElementById("sgp39").value
   
   var scp31 = document.getElementById("scp31").value
   var scp32 = document.getElementById("scp32").value
   var scp33 = document.getElementById("scp33").value
   var scp34 = document.getElementById("scp34").value
   var scp35 = document.getElementById("scp35").value
   var scp36 = document.getElementById("scp36").value
   var scp37 = document.getElementById("scp37").value
   var scp38 = document.getElementById("scp38").value
   var scp39 = document.getElementById("scp39").value

   var so3 = sgp31*scp31+sgp32*scp32+sgp33*scp33+sgp34*scp34+sgp35*scp35+sgp36*scp36+sgp37*scp37+sgp38*scp38+sgp39*scp39
   var st3 = highgp*scp31+highgp*scp32+highgp*scp33+highgp*scp34+highgp*scp35+highgp*scp36+highgp*scp37+highgp*scp38+highgp*scp39
   var totalmark3 = document.getElementById("totalmark3")
   var obtainedmark3 = document.getElementById("obtainedmark3")
   var cgpa3 = document.getElementById("cgpa3")
   var percentage3 = document.getElementById("percentage3")
   var cgpa33 = so3/st3*10
   totalmark3.textContent = "Total Marks : "+st3
   obtainedmark3.textContent = "Obtained Marks : "+so3
   cgpa3.textContent = "Marks in CGPA : "+ cgpa33.toFixed(2)
   percentage3.textContent = "Marks in Percentage : "+ Math.round(so3/st3*100)+"%"


   //Semester 4
   var sgp41 = document.getElementById("sgp41").value
   var sgp42 = document.getElementById("sgp42").value
   var sgp43 = document.getElementById("sgp43").value
   var sgp44 = document.getElementById("sgp44").value
   var sgp45 = document.getElementById("sgp45").value
   var sgp46 = document.getElementById("sgp46").value
   var sgp47 = document.getElementById("sgp47").value
   var sgp48 = document.getElementById("sgp48").value
   var sgp49 = document.getElementById("sgp49").value

   var scp41 = document.getElementById("scp41").value
   var scp42 = document.getElementById("scp42").value
   var scp43 = document.getElementById("scp43").value
   var scp44 = document.getElementById("scp44").value
   var scp45 = document.getElementById("scp45").value
   var scp46 = document.getElementById("scp46").value
   var scp47 = document.getElementById("scp47").value
   var scp48 = document.getElementById("scp48").value
   var scp49 = document.getElementById("scp49").value
   
   var so4 = sgp41*scp41+sgp42*scp42+sgp43*scp43+sgp44*scp44+sgp45*scp45+sgp46*scp46+sgp47*scp47+sgp48*scp48+sgp49*scp49
   var st4 = highgp*scp41+highgp*scp42+highgp*scp43+highgp*scp44+highgp*scp45+highgp*scp46+highgp*scp47+highgp*scp48+highgp*scp49
   var totalmark4 = document.getElementById("totalmark4")
   var obtainedmark4 = document.getElementById("obtainedmark4")
   var cgpa4 = document.getElementById("cgpa4")
   var percentage4 = document.getElementById("percentage4")
   var cgpa44 = so4/st4*10
   totalmark4.textContent = "Total Marks : "+st4
   obtainedmark4.textContent = "Obtained Marks : "+so4
   cgpa4.textContent = "Marks in CGPA : "+ cgpa44.toFixed(2)
   percentage4.textContent = "Marks in Percentage : "+ Math.round(so4/st4*100)+"%"


   //Semester 5
   var sgp51 = document.getElementById("sgp51").value
   var sgp52 = document.getElementById("sgp52").value
   var sgp53 = document.getElementById("sgp53").value
   var sgp54 = document.getElementById("sgp54").value
   var sgp55 = document.getElementById("sgp55").value
   var sgp56 = document.getElementById("sgp56").value
   var sgp57 = document.getElementById("sgp57").value
   var sgp58 = document.getElementById("sgp58").value
   var sgp59 = document.getElementById("sgp59").value

   var scp51 = document.getElementById("scp51").value
   var scp52 = document.getElementById("scp52").value
   var scp53 = document.getElementById("scp53").value
   var scp54 = document.getElementById("scp54").value
   var scp55 = document.getElementById("scp55").value
   var scp56 = document.getElementById("scp56").value
   var scp57 = document.getElementById("scp57").value
   var scp58 = document.getElementById("scp58").value
   var scp59 = document.getElementById("scp59").value
   
   var so5 = sgp51*scp51+sgp52*scp52+sgp53*scp53+sgp54*scp54+sgp55*scp55+sgp56*scp56+sgp57*scp57+sgp58*scp58+sgp59*scp59
   var st5 = highgp*scp51+highgp*scp52+highgp*scp53+highgp*scp54+highgp*scp55+highgp*scp56+highgp*scp57+highgp*scp58+highgp*scp59
   var totalmark5 = document.getElementById("totalmark5")
   var obtainedmark5 = document.getElementById("obtainedmark5")
   var cgpa5 = document.getElementById("cgpa5")
   var percentage5 = document.getElementById("percentage5")
   var cgpa55 = so5/st5*10
   totalmark5.textContent = "Total Marks : "+st5
   obtainedmark5.textContent = "Obtained Marks : "+so5
   cgpa5.textContent = "Marks in CGPA : "+ cgpa55.toFixed(2)
   percentage5.textContent = "Marks in Percentage : "+ Math.round(so5/st5*100)+"%"



   //Semester 6
   var sgp61 = document.getElementById("sgp61").value
   var sgp62 = document.getElementById("sgp62").value
   var sgp63 = document.getElementById("sgp63").value
   var sgp64 = document.getElementById("sgp64").value
   var sgp65 = document.getElementById("sgp65").value
   var sgp66 = document.getElementById("sgp66").value
   var sgp67 = document.getElementById("sgp67").value
   var sgp68 = document.getElementById("sgp68").value
   var sgp69 = document.getElementById("sgp69").value

   var scp61 = document.getElementById("scp61").value
   var scp62 = document.getElementById("scp62").value
   var scp63 = document.getElementById("scp63").value
   var scp64 = document.getElementById("scp64").value
   var scp65 = document.getElementById("scp65").value
   var scp66 = document.getElementById("scp66").value
   var scp67 = document.getElementById("scp67").value
   var scp68 = document.getElementById("scp68").value
   var scp69 = document.getElementById("scp69").value
   var so6 = sgp61*scp61+sgp62*scp62+sgp63*scp63+sgp64*scp64+sgp65*scp65+sgp66*scp66+sgp67*scp67+sgp68*scp68+sgp69*scp69
   var st6 = highgp*scp61+highgp*scp62+highgp*scp63+highgp*scp64+highgp*scp65+highgp*scp66+highgp*scp67+highgp*scp68+highgp*scp69
   var totalmark6 = document.getElementById("totalmark6")
   var obtainedmark6 = document.getElementById("obtainedmark6")
   var cgpa6 = document.getElementById("cgpa6")
   var percentage6 = document.getElementById("percentage6")
   var cgpa66 = so6/st6*10
   totalmark6.textContent = "Total Marks : "+st6
   obtainedmark6.textContent = "Obtained Marks : "+so6
   cgpa6.textContent = "Marks in CGPA : "+ cgpa66.toFixed(2)
   percentage6.textContent = "Marks in Percentage : "+ Math.round(so6/st6*100)+"%"



   //Total Semesters
   var total = document.getElementById("total")
   var obtained = document.getElementById("obtained")
   var totalcgpa = document.getElementById("totalcgpa")
   var totalpercentage = document.getElementById("totalpercentage")
   var full = st1+st2+st3+st4+st5+st6
   var half = so1+so2+so3+so4+so5+so6
   
   total.textContent = "Total Marks : "+ Number(st1+st2+st3+st4+st5+st6)
   obtained.textContent = "Obtained Marks : "+Number(so1+so2+so3+so4+so5+so6)
   totalcgpa.textContent = "Marks in CGPA : "+ Number(half/full*10).toFixed(2)
   totalpercentage.textContent = "Marks in Percentage : "+ Math.round(half/full*100)+"%"
  

}