import { Component } from "@angular/core";
import { combineLatest } from 'rxjs';
declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "arm";
  timeDelay: any = null;
  public node4 = 0;
  public node5 = 0;
  public node6 = 0;
  public node7 = 0;
  public node8 = 0;
  public node9 = 0;
  public node10 = 0;
  public node11 = 0;
  public node12 = 0;

ngOnInit(): void {


}
  numberNode = {
    n0: 0,
    n1: 0,
    n2: 0,
    n3: 0,
    n4: 0,
    n5: 0,
    n6: 0,
    n7: 0,
    n8: 0,
    n9: 0,
    n10: 0,
    n11: 0,
    n12: 0,
    n0l: 0,
    n0r: 0,
    n1l: 0,
    n1r: 0,
    n2l: 0,
    n2r: 0,
    n3l: 0,
    n3r: 0
  };

  constructor() {}

  public readKeyname() {
    return Object.keys(this.numberNode);
  }

  async onSearchNode(delay: number) {
    let low1 = this.numberNode[`n4`];
    //-------------------------------------------------------------------------
    for (let i = 0; i < 2; i++) {
      if (i == 1 || i == 2 || i == 3) {
        $(`#${this.readKeyname()[i]}`).addClass("readNodeTop");

      } else {
        $(`#${this.readKeyname()[i]}`).addClass("readNodeBottom");

      }
      await this.delay(delay);
      if (i == 1 || i == 2 || i == 3) {
        $(`#${this.readKeyname()[i]}`).removeClass("readNodeTop");
      } else {
        $(`#${this.readKeyname()[i]}`).removeClass("readNodeBottom");

      }
    }
    //-------------------------------------------------------------------------
    for (let i = 0; i < 3; i++) {
      low1 =
        this.numberNode[`n${4 + i}`] < low1
          ? this.numberNode[`n${4 + i}`]
          : low1;
      $(`#${this.readKeyname()[`${4 + i}`]}`).addClass("readNodeBottom");
      await this.delay(delay);
      $(`#${this.readKeyname()[`${4 + i}`]}`).removeClass("readNodeBottom");
      $(`#${this.readKeyname()[1]}`).addClass("readNodeTop");
      this.numberNode["n1r"] = low1;
      this.numberNode["n1"] = low1;
      if (i == 2) {
        this.numberNode["n1l"] = low1;
      }
      await this.delay(delay);
      $(`#${this.readKeyname()[1]}`).removeClass("readNodeTop");
    }
    //-------------------------------------------------------------------------
    $(`#${this.readKeyname()[0]}`).addClass("readNodeBottom");
    this.numberNode["n0l"] = low1;
    this.numberNode["n0"] = low1;
    await this.delay(delay);
    $(`#${this.readKeyname()[0]}`).removeClass("readNodeBottom");
    $(`#${this.readKeyname()[2]}`).addClass("readNodeTop");
    await this.delay(delay);
    $(`#${this.readKeyname()[2]}`).removeClass("readNodeTop");

    //-------------------------------------------------------------------------
    low1 = this.numberNode[`n7`];
    for (let i = 0; i < 3; i++) {
      low1 =
        this.numberNode[`n${7 + i}`] < low1
          ? this.numberNode[`n${7 + i}`]
          : low1;
      $(`#${this.readKeyname()[`${7 + i}`]}`).addClass("readNodeBottom");
      await this.delay(delay);
      $(`#${this.readKeyname()[`${7 + i}`]}`).removeClass("readNodeBottom");
      $(`#${this.readKeyname()[2]}`).addClass("readNodeTop");
      this.numberNode["n2r"] = low1;
      this.numberNode["n2"] = low1;
      if (this.numberNode[`n${7 + i}`] <= this.numberNode["n1l"]) {
        await this.delay(delay);
        $(`#${this.readKeyname()[2]}`).removeClass("readNodeTop");
        this.numberNode["n0r"] = this.numberNode["n0l"];
        this.numberNode["n0l"] = low1;
        $(`#${this.readKeyname()[0]}`).addClass("readNodeBottom");
        // alert("")
        this.numberNode["n0"] =
          this.numberNode["n1"] >= this.numberNode["n2"]
            ? this.numberNode["n1"]
            : this.numberNode["n2"];
        break;
      }

      await this.delay(delay);
      $(`#${this.readKeyname()[2]}`).removeClass("readNodeTop");
      $(`#${this.readKeyname()[0]}`).addClass("readNodeBottom");
      this.numberNode["n0r"] = low1;
      await this.delay(delay);
      if (i == 2) {
        this.numberNode["n2l"] = this.numberNode["n2r"];
        this.numberNode["n0"] =
          this.numberNode["n1"] >= this.numberNode["n2"]
            ? this.numberNode["n1"]
            : this.numberNode["n2"];
        $(`#${this.readKeyname()[0]}`).removeClass("readNodeBottom");
        this.numberNode["n2l"] = low1;
        break;
      }
      $(`#${this.readKeyname()[2]}`).addClass("readNodeTop");
      $(`#${this.readKeyname()[0]}`).removeClass("readNodeBottom");
      await this.delay(delay);
      $(`#${this.readKeyname()[2]}`).removeClass("readNodeTop");
    }
    //-------------------------------------------------------------------------
    low1 = this.numberNode[`n10`];
    let Max2 = 0;
    for (let i = 0; i < 3; i++) {
      low1 =
        this.numberNode[`n${10 + i}`] < low1
          ? this.numberNode[`n${10 + i}`]
          : low1;
      $(`#${this.readKeyname()[`${10 + i}`]}`).addClass("readNodeBottom");
      await this.delay(delay);
      $(`#${this.readKeyname()[`${10 + i}`]}`).removeClass("readNodeBottom");
      $(`#${this.readKeyname()[3]}`).addClass("readNodeTop");
      this.numberNode["n3r"] = low1;
      this.numberNode["n3"] = low1;
      if (this.numberNode[`n${10 + i}`] <= this.numberNode["n2r"]) {
        await this.delay(delay);
        $(`#${this.readKeyname()[3]}`).removeClass("readNodeTop");
        this.numberNode["n0r"] = this.numberNode["n0l"];
        this.numberNode["n0l"] = low1;
        $(`#${this.readKeyname()[0]}`).addClass("readNodeBottom");
        // alert("")
        Max2 = this.numberNode["n1"];
        for (let kk = 2; kk < 4; kk++) {
          if (this.numberNode[`n${kk}`] >= Max2) {
            Max2 = this.numberNode[`n${kk}`];
            this.numberNode["n0"] = Max2;
          }
        }
        break;
      }
      await this.delay(delay);
      $(`#${this.readKeyname()[3]}`).removeClass("readNodeTop");
      $(`#${this.readKeyname()[0]}`).addClass("readNodeBottom");
      this.numberNode["n0r"] = low1;
      await this.delay(delay);
      if (i == 2) {
        this.numberNode["n3l"] = this.numberNode["n3r"];
        Max2 = this.numberNode["n1"];
        for (let kk = 2; kk < 4; kk++) {
          if (this.numberNode[`n${kk}`] >= Max2) {
            Max2 = this.numberNode[`n${kk}`];
            this.numberNode["n0"] = Max2;
          }
        }
        $(`#${this.readKeyname()[0]}`).removeClass("readNodeBottom");
        this.numberNode["n3l"] = low1;
        break;
      }
      $(`#${this.readKeyname()[3]}`).addClass("readNodeTop");
      $(`#${this.readKeyname()[0]}`).removeClass("readNodeBottom");
      await this.delay(delay);
      $(`#${this.readKeyname()[3]}`).removeClass("readNodeTop");
    }
    //-------------------------------------------------------------------------
    $(`#${this.readKeyname()[0]}`).removeClass("readNodeBottom");
    $(`#${this.readKeyname()[0]}`).addClass("readNodeBottom");
    this.numberNode["n0l"] = Max2;
    this.numberNode["n0r"] = Max2;
    await this.delay(delay);
    alert("ค้นหาเสร็จแล้ว")

  }

  private delay(ms: number) {
    return new Promise(resolve => (this.timeDelay = setTimeout(resolve, ms)));
  }

  public randomNumber() {
    if (this.timeDelay != null) {
      clearTimeout(this.timeDelay);
    }

    this.numberNode = {
      n0: 0,
      n1: 0,
      n2: 0,
      n3: 0,
      n4: Math.round(Math.random() * 100) + 1,
      n5: Math.round(Math.random() * 100) + 1,
      n6: Math.round(Math.random() * 100) + 1,
      n7: Math.round(Math.random() * 100) + 1,
      n8: Math.round(Math.random() * 100) + 1,
      n9: Math.round(Math.random() * 100) + 1,
      n10: Math.round(Math.random() * 100) + 1,
      n11: Math.round(Math.random() * 100) + 1,
      n12: Math.round(Math.random() * 100) + 1,
      n0l: 0,
      n0r: 0,
      n1l: 0,
      n1r: 0,
      n2l: 0,
      n2r: 0,
      n3l: 0,
      n3r: 0
    };
    // this.onSearchNode(800);
    // console.log(this.numberNode);
  }
  public  start() {
    if( this.numberNode.n4 === 0 || this.numberNode.n5 === 0 || this.numberNode.n6 === 0 || this.numberNode.n7 === 0 || this.numberNode.n8 === 0 ||
      this.numberNode.n9 === 0 || this.numberNode.n10 === 0 || this.numberNode.n11 === 0 || this.numberNode.n12 === 0 ){

        alert("กรุณากรอกตัวเลข ");

     }

     else {
      this.onSearchNode(700);
     }

  }


  public reset2(){

  }

  public  reset() {
    if (this.timeDelay != null) {
      clearTimeout(this.timeDelay);
    }
    this.node4 =	0	;
    this.node5 =	0	;
    this.node6 =	0	;
    this.node7 =	0	;
    this.node8 =	0	;
    this.node9 =	0	;
    this.node10 =	0	;
    this.node11 =	0	;
    this.node12 =	0	;


    this.numberNode = {


      n0: 0,
      n1: 0,
      n2: 0,
      n3: 0,
      n4: 0,
      n5: 0,
      n6: 0,
      n7: 0,
      n8: 0,
      n9: 0,
      n10: 0,
      n11: 0,
      n12: 0,
      n0l: 0,
      n0r: 0,
      n1l: 0,
      n1r: 0,
      n2l: 0,
      n2r: 0,
      n3l: 0,
      n3r: 0,

    };
  }
  public  add(node4,node5,node6,node7,node8,node9,node10,node11,node12) {
    if(node4 === ''){
    alert("กรุณากรอกค่า")

    }
    else {

      this.	numberNode.	n4	 =	node4	 ;
      this.	numberNode.	n5	 =	node5	 ;
      this.	numberNode.	n6	 =	node6	 ;
      this.	numberNode.	n7	 =	node7	 ;
      this.	numberNode.	n8	 =	node8	 ;
      this.	numberNode.	n9	 =	node9	 ;
      this.	numberNode.	n10	 =	node10	 ;
      this.	numberNode.	n11	 =	node11	 ;
      this.	numberNode.	n12	 =	node12	 ;

    // this.	numberNode.	n4	 =	node4	 ;
    // console.log(node4);
    // this.	numberNode.	n5	 =	node5	 ;
    // this.	numberNode.	n6	 =	node6	 ;
    // this.	numberNode.	n7	 =	node7	 ;
    // this.	numberNode.	n8	 =	node8	 ;
    // this.	numberNode.	n9	 =	node9	 ;
    // this.	numberNode.	n10	 =	node10	 ;
    // this.	numberNode.	n11	 =	node11	 ;
    // this.	numberNode.	n12	 =	node12	 ;
  }

}}
