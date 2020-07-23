class TimeTable{
    constructor(){  
        this.input1 = createInput("subject");
        this.submit=createButton("submit");
        this.input2 = createInput("subject");
        this.input3 = createInput("subject");
        this.input4 = createInput("subject");
        this.input5 = createInput("subject");
        this.input6 = createInput("subject");
        this.input7 = createInput("subject"); 
        this.input8  = createInput("subject");
        this.input9  = createInput("subject");
        this.input10 = createInput("subject");
        this.input11 = createInput("subject");
        this.input12 = createInput("subject");
        this.input13 = createInput("subject");
        this.input14 = createInput("subject");
        this.input15 = createInput("subject");
        this.input16 = createInput("subject");
        this.input17 = createInput("subject");
        this.input18 = createInput("subject");
        this.input19 = createInput("subject");
        this.input20 = createInput("subject");
        this.input21= createInput("subject");
        this.input22 = createInput("subject");
        this.input23 = createInput("subject");
        this.input24 = createInput("subject");
        this.input25 = createInput("subject");
        this.input26 = createInput("subject"); 
        this.input27 = createInput("subject");
        this.input28 = createInput("subject");
        this.input29 = createInput("subject");
        this.input30 = createInput("subject");
        this.input31 = createInput("subject");
        this.input32 = createInput("subject");
        this.input33= createInput("subject");
        this.input34 = createInput("subject");
        this.input35 = createInput("subject");
        this.input36 = createInput("subject");
        this.input37 = createInput("subject");
        this.input38 = createInput("subject");
        this.input39 = createInput("subject");
        this.input40 = createInput("subject");
        this.input41 = createInput("subject");
        this.input42 = createInput("subject"); 
        this.input43 = createInput("subject");
        this.input44 = createInput("subject");
        this.input45 = createInput("subject");
        this.input46 = createInput("subject");
        this.input47 = createInput("subject");
        this.input48 = createInput("subject");
        this.input49 = createInput("subject");
        this.input50 = createInput("subject");
        this.input51 = createInput("subject");
        this.input52 = createInput("subject");
        this.input53 = createInput("subject");
        this.input54 = createInput("subject");
        this.input55 = createInput("subject");
        this.input56 = createInput("subject");
        this.input57 = createInput("subject");
        this.input58 = createInput("subject");
        this.input59 = createInput("subject");
        this.input60 = createInput("subject");
        this.input61 = createInput("subject"); 
        this.input62 = createInput("subject");
        this.input63 = createInput("subject");
        this.input64 = createInput("subject");
        this.input65 = createInput("subject");
        this.input66 = createInput("subject");
        this.input67 = createInput("subject");
        this.input68 = createInput("subject");
        this.input69 = createInput("subject");
        this.input70 = createInput("subject");


        
        this.time1=createInput("");
        this.time2=createInput("");
        this.time3=createInput("");
        this.time4=createInput("");
        this.time5=createInput("");
        this.time6=createInput("");
        this.time7=createInput("");
        this.time8=createInput("");
        this.time9=createInput("");
        this.time10=createInput("");


    }
    hide(){
        this.input1.hide();
        this.submit.hide();
        this.input2.hide();
        this.input3.hide();
        this.input4.hide();
        this.input5.hide();
        this.input6.hide();
        this.input7.hide();
        this.input8.hide();
        this.input9.hide();
        this.input10.hide();
        this.input11.hide();
        this.input12.hide();
        this.input13.hide();
        this.input14.hide();
        this.input15.hide();
        this.input16.hide();
        this.input17.hide();
        this.input18.hide();
        this.input19.hide();
        this.input20.hide();
        this.input21.hide();
        this.input22.hide();
        this.input23.hide();
        this.input24.hide();
        this.input25.hide();
        this.input26.hide();
        this.input27.hide();
        this.input28.hide();
        this.input29.hide();
        this.input30.hide();
        this.input31.hide();
        this.input32.hide();
        this.input33.hide();
        this.input34.hide();
        this.input35.hide();
        this.input36.hide();
        this.input37.hide();
        this.input38.hide();
        this.input39.hide();
        this.input40.hide();
        this.input41.hide();
        this.input42.hide();
        this.input43.hide();
        this.input44.hide();
        this.input45.hide();
        this.input46.hide();
        this.input47.hide();
        this.input48.hide();
        this.input49.hide();
        this.input50.hide();
        this.input51.hide();
        this.input52.hide();
        this.input53.hide();
        this.input54.hide();
        this.input55.hide();
        this.input56.hide();
        this.input57.hide();
        this.input58.hide();
        this.input59.hide();
        this.input60.hide();
        this.input61.hide();
        this.input62.hide();
        this.input63.hide();
        this.input64.hide();
        this.input65.hide();
        this.input66.hide();
        this.input67.hide();
        this.input68.hide();
        this.input69.hide();
        this.input70.hide();


        this.time1.hide();
        this.time2.hide();
        this.time3.hide();
        this.time4.hide();
        this.time5.hide();
        this.time6.hide();
        this.time7.hide();
        this.time8.hide();
        this.time9.hide();
        this.time10.hide();

      
    }
    display(){

    var monday=createElement("h4");
    var tuesday=createElement("h4");
    var wednesday=createElement("h4");
    var thursday=createElement("h4");
    var friday=createElement("h4");
    var saturday=createElement("h4");
    var sunday=createElement("h4");

    var time=createElement("h4");
    var time2=createElement("h4");

    
    monday.html("Monday");
    tuesday.html("Tuesday");
    wednesday.html("Wednesday");
    thursday.html("Thursday");
    friday.html("Saturday");
    saturday.html("Friday");
    sunday.html("Sunday");

    time.html("Time  (only write the");
    time2.html("starting time in 24 hours)");

    
    time.position(width/2-700,height/6);
    time2.position(width/2-700,height/6+30);


    monday.position(width/2-width/3,height/6);
    tuesday.position(width/2-width/3+150,height/6);
    wednesday.position(width/2-width/3+300,height/6);
    thursday.position(width/2,height/6);
    friday.position(width/2+width/3-150,height/6);
    saturday.position(width/2+width/3-300,height/6);
    sunday.position(width/2+width/3,height/6);

  


   
   

    this.time1.position(width/2-700,height/4+10);
    this.time2.position(width/2-700,height/4+60);
    this.time3.position(width/2-700,height/4+120);
    this.time4.position(width/2-700,height/4+180);
    this.time5.position(width/2-700,height/4+240);

    this.time6.position(width/2-700,height/4+300);
    this.time7.position(width/2-700,height/4+360);
    this.time8.position(width/2-700,height/4+420);
    this.time9.position(width/2-700,height/4+480);
    this.time10.position(width/2-700,height/4+540);


   
    

    this.input1.position(width/2-width/3,height/4+10);
    this.input2.position(width/2-width/3+150,height/4+10);
    this.input3.position(width/2-width/3+300,height/4+10);
    this.input4.position(width/2-25,height/4+10);
    this.input5.position(width/2+width/3-175,height/4+10);
    this.input6.position(width/2+width/3-350,height/4+10);
    this.input7.position(width/2+width/3,height/4+10);

    this.input8.position(width/2-width/3,height/4+60);
    this.input9.position(width/2-width/3+150,height/4+60);
    this.input10.position(width/2-width/3+300,height/4+60);
    this.input11.position(width/2-25,height/4+60);
    this.input12.position(width/2+width/3-175,height/4+60);
    this.input13.position(width/2+width/3-350,height/4+60);
    this.input14.position(width/2+width/3,height/4+60);

    this.input15.position(width/2-width/3,height/4+120);
    this.input16.position(width/2-width/3+150,height/4+120);
    this.input17.position(width/2-width/3+300,height/4+120);
    this.input18.position(width/2-25,height/4+120);
    this.input19.position(width/2+width/3-175,height/4+120);
    this.input20.position(width/2+width/3-350,height/4+120);
    this.input21.position(width/2+width/3,height/4+120); 

    this.input22.position(width/2-width/3,height/4+180);
    this.input23.position(width/2-width/3+150,height/4+180);
    this.input24.position(width/2-width/3+300,height/4+180);
    this.input25.position(width/2-25,height/4+180);
    this.input26.position(width/2+width/3-175,height/4+180);
    this.input27.position(width/2+width/3-350,height/4+180);
    this.input28.position(width/2+width/3,height/4+180);

    this.input29.position(width/2-width/3,height/4+240);
    this.input30.position(width/2-width/3+150,height/4+240);
    this.input31.position(width/2-width/3+300,height/4+240);
    this.input32.position(width/2-25,height/4+240);
    this.input33.position(width/2+width/3-175,height/4+240);
    this.input34.position(width/2+width/3-350,height/4+240);
    this.input35.position(width/2+width/3,height/4+240);

    this.input36.position(width/2-width/3,height/4+300);
    this.input37.position(width/2-width/3+150,height/4+300);
    this.input38.position(width/2-width/3+300,height/4+300);
    this.input39.position(width/2-25,height/4+300);
    this.input40.position(width/2+width/3-175,height/4+300);
    this.input41.position(width/2+width/3-350,height/4+300);
    this.input42.position(width/2+width/3,height/4+300);

    this.input43.position(width/2-width/3,height/4+360);
    this.input44.position(width/2-width/3+150,height/4+360);
    this.input45.position(width/2-width/3+300,height/4+360);
    this.input46.position(width/2-25,height/4+360);
    this.input47.position(width/2+width/3-175,height/4+360);
    this.input48.position(width/2+width/3-350,height/4+360);
    this.input49.position(width/2+width/3,height/4+360);

    this.input50.position(width/2-width/3,height/4+420);
    this.input51.position(width/2-width/3+150,height/4+420);
    this.input52.position(width/2-width/3+300,height/4+420);
    this.input53.position(width/2-25,height/4+420);
    this.input54.position(width/2+width/3-175,height/4+420);
    this.input55.position(width/2+width/3-350,height/4+420);
    this.input56.position(width/2+width/3,height/4+420);
    
    
    this.input57.position(width/2-width/3,height/4+480);
    this.input58.position(width/2-width/3+150,height/4+480);
    this.input59.position(width/2-width/3+300,height/4+480);
    this.input60.position(width/2-25,height/4+480);
    this.input61.position(width/2+width/3-175,height/4+480);
    this.input62.position(width/2+width/3-350,height/4+480);
    this.input63.position(width/2+width/3,height/4+480);


    this.input64.position(width/2-width/3,height/4+540);
    this.input65.position(width/2-width/3+150,height/4+540);
    this.input66.position(width/2-width/3+300,height/4+540);
    this.input67.position(width/2-25,height/4+540);
    this.input68.position(width/2+width/3-175,height/4+540);
    this.input69.position(width/2+width/3-350,height/4+540);
    this.input70.position(width/2+width/3,height/4+540);



    this.input1.show();
    this.input2.show();
    this.input3.show();
    this.input4.show();
    this.input5.show();
    this.input6.show();
    this.input7.show();
    this.input8.show();
    this.input9.show();
    this.input10.show();
    this.input11.show();
    this.input12.show();
    this.input13.show();
    this.input14.show();
    this.input15.show();
    this.input16.show();
    this.input17.show();
    this.input18.show();
    this.input19.show();
    this.input20.show();
    this.input21.show();
    this.input22.show();
    this.input23.show();
    this.input24.show();
    this.input25.show();
    this.input26.show();
    this.input27.show();
    this.input28.show();
    this.input29.show();
    this.input30.show();
    this.input31.show();
    this.input32.show();
    this.input33.show();
    this.input34.show();
    this.input35.show();
    this.input36.show();
    this.input37.show();
    this.input38.show();
    this.input39.show();
    this.input40.show();
    this.input41.show();
    this.input42.show();
    this.input43.show();
    this.input44.show();
    this.input45.show();
    this.input46.show();
    this.input47.show();
    this.input48.show();
    this.input49.show();
    this.input50.show();
    this.input51.show();
    this.input52.show();
    this.input53.show();
    this.input54.show();
    this.input55.show();
    this.input56.show();
    this.input57.show();
    this.input58.show();
    this.input59.show();
    this.input60.show();
    this.input61.show();
    this.input62.show();
    this.input63.show();
    this.input64.show();
    this.input65.show();
    this.input66.show();
    this.input67.show();
    this.input68.show();
    this.input69.show();
    this.input70.show();



    this.time1.show();
    this.time2.show();
    this.time3.show();
    this.time4.show();
    this.time5.show();
    this.time6.show();
    this.time7.show();
    this.time8.show();
    this.time9.show();
    this.time10.show();
    
    





        this.submit.show();

        this.submit.position(1100,height-700);

        this.submit.mousePressed(()=>{

            user.answer[0]=this.input1.value();
            user.answer[1]=this.input2.value();
            user.answer[2]=this.input3.value();
            user.answer[3]=this.input4.value();
            user.answer[4]=this.input5.value();
            user.answer[5]=this.input6.value();
            user.answer[6]=this.input7.value();

            user.answer[7]=this.input8.value();
            user.answer[8]=this.input9.value();
            user.answer[9]=this.input10.value();
            user.answer[10]=this.input11.value();
            user.answer[11]=this.input12.value();
            user.answer[12]=this.input13.value();
            user.answer[13]=this.input14.value();

            user.answer[14]=this.input15.value();
            user.answer[15]=this.input16.value();
            user.answer[16]=this.input17.value();
            user.answer[17]=this.input18.value();
            user.answer[18]=this.input19.value();
            user.answer[19]=this.input20.value();
            user.answer[20]=this.input21.value();

            user.answer[21]=this.input22.value();
            user.answer[22]=this.input23.value();
            user.answer[23]=this.input24.value();
            user.answer[24]=this.input25.value();
            user.answer[25]=this.input26.value();
            user.answer[26]=this.input27.value();
            user.answer[27]=this.input28.value();

            user.answer[28]=this.input29.value();
            user.answer[29]=this.input30.value();
            user.answer[30]=this.input31.value();
            user.answer[31]=this.input32.value();
            user.answer[32]=this.input33.value();
            user.answer[33]=this.input34.value();
            user.answer[34]=this.input35.value();

            user.answer[35]=this.input36.value();
            user.answer[36]=this.input37.value();
            user.answer[37]=this.input38.value();
            user.answer[38]=this.input39.value();
            user.answer[39]=this.input40.value();
            user.answer[40]=this.input41.value();
            user.answer[41]=this.input42.value();

            user.answer[42]=this.input43.value();
            user.answer[43]=this.input44.value();
            user.answer[44]=this.input45.value();
            user.answer[45]=this.input46.value();
            user.answer[46]=this.input47.value();
            user.answer[47]=this.input48.value();
            user.answer[48]=this.input49.value();

            user.answer[50]=this.input50.value();
            user.answer[51]=this.input51.value();
            user.answer[52]=this.input52.value();
            user.answer[53]=this.input53.value();
            user.answer[54]=this.input54.value();
            user.answer[55]=this.input55.value();
            user.answer[56]=this.input56.value();

            user.answer[57]=this.input57.value();
            user.answer[58]=this.input58.value();
            user.answer[59]=this.input59.value();
            user.answer[60]=this.input60.value();
            user.answer[61]=this.input61.value();
            user.answer[62]=this.input62.value();
            user.answer[63]=this.input63.value();

            user.answer[64]=this.input64.value();
            user.answer[65]=this.input65.value();
            user.answer[66]=this.input66.value();
            user.answer[67]=this.input67.value();
            user.answer[68]=this.input68.value();
            user.answer[69]=this.input69.value();
            user.answer[70]=this.input70.value();




            user.time[0]=this.time1.value();
            user.time[1]=this.time2.value();
            user.time[2]=this.time3.value();
            user.time[3]=this.time4.value();
            user.time[4]=this.time5.value();

            user.time[5]=this.time6.value();
            user.time[6]=this.time7.value();
            user.time[7]=this.time8.value();
            user.time[8]=this.time9.value();
            user.time[9]=this.time10.value();
     
            user.update();
   
           gameState=2;
        })
       
        
    }
} 
