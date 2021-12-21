function tugas(){
    var x = "Saya beLajar bahaSa peMrograman deNgan khUsuk";
    console.log(x.toLowerCase());
    console.log(x.toUpperCase());
    console.log(" ");
    var y = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual";
    console.log(y.toLowerCase());
    console.log(y.toUpperCase());
    console.log(" ");
    var z = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    var za = z.substr(0,6);
    console.log(za);
    for(var i =0;i<=5;i++){
        
        console.log(za.charAt(i)," ",za.charCodeAt(i));
    }
}
tugas();