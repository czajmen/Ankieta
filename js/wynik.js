<script type="text/javascript">
<!--
 
 var imlocation = "images/";
 var currentdate = 0;
 var image_number = 0;
 function ImageArray (n) {
   this.length = n;
   for (var i =1; i <= n; i++) {
     this[i] = ' '
   }
 }
 function insert(){
 image = new ImageArray(6)
 image[0] = '01.jpg'
 image[1] = '02.jpg'
 image[2] = '03.jpg'
 image[3] = '04.jpg'
 image[4] = '05.jpg'
 image[5] = '06.jpg'
 
 text = new TextArray(6);
 text[0] = "<h2>Nowoczesna Artystka</h2><br>Ciągle poszukujesz nowego odniesienia do swojej osobowosci ale nie mart sie natchnienie czeka za rogiem"
 text[1] = "<h2>Codzienna Optymistka</h2><br>Każde wyzwanie traktujesz z lekkościa i nie obawiasz sie ze zawiedziesz ,ale pamientaj o przyjaciołach których zawsze masz obok siebie"
 text[2] = "<h2>Kochająca Matka</h2><br>Rodzina jest dla ciebie najwazniejsza .Kochający mąż i dziecko to źródło twojej codziennej energi"
 text[3] = "<h2>Wieczne dziecko</h2><br>Codziennoś to dla ciebie kolejna przygoda .Za kazdym razem odkrywasz nowy swiat i cieżko ci zatrzymać w jedym miejscu"
 text[4] = "<h2>Nieszcześliwy Rodzic</h2><br>Zdarzyła ci sie straszna tragedia ,ale nie traf wiary nie wiesz kiedy zycie zmieni sie na lepsze"
 text[5] = "<h2>Zmiennie Morze</h2><br>Nigdy nie wiadomo czego sie od ciebie spodziewac .Raz jestes spokojna i beztroska ,a innym razem nerwowa i niepewna .Staraj sie nie przejmowac bo to dla ciebie najważniejsze"
 var rand = 60/image.length
 
int x = Math.floor(image_number/rand)
	
var src = document.getElementById("div");
var img = document.createElement("img");
img.src = imlocation + image[x];
src.appendChild(img);
 
// document.getElementById("demo").innerHTML = "<img src=" imlocation + image[x]+"/><br><h2 id="surveystart" class="text_end" style="font-size: 10px;">" +text[x] + "</h2>"  ;

 }
</script>