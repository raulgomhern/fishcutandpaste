class Draggableone {

    constructor() {
        this.container = document.querySelector('.fillone');
        this.boxone = document.querySelectorAll('.startpointone,.emptyone');
        this._addEventListener();
    }
 
    _addEventListener() {
        this.boxone.forEach(element => {
            element.addEventListener('dragleave', this.dragleaveone)
            element.addEventListener('dragover', this.dragoverone)
            element.addEventListener('drop', this.dropone)
        });
 
        this.container.addEventListener('dragstart', this.dragstartone);
        this.container.addEventListener('dragend', this.dragendone);
    }
 
    dragstartone(e) {
        this.classList.add('drag_startone');
       setTimeout(() => {
          this.classList.add('invisibleone');
       }, 0);
    }
 
    dragendone(e) {
        console.log('dragend')
        this.classList.remove('invisibleone');
        this.classList.remove('drag_startone');
    }
    dragleaveone(e) {
        console.log('dragleaveone')
    }
 
    dragoverone(e) {
        e.preventDefault();
        console.log('dragoverone')
    }
 
    dropone(){ 
     let container = document.querySelector('.fillone'); 
     this.append(container);
     var emptyone = document.getElementById("emptyone");   
     var fillone = document.getElementById("fillone");
     if  (emptyone.contains(fillone)){
         console.log('emptyone');
     }
 }
 
    static init() {
     return new this();
     }
 }
  
 class Draggabletwo {
 
     constructor() {
         this.container = document.querySelector('.filltwo');
         
         this.boxtwo = document.querySelectorAll('.startpointtwo, .emptytwo');
         
         this._addEventListener();
     }
  
     _addEventListener() {
         this.boxtwo.forEach(element => {
             element.addEventListener('dragleave', this.dragleavetwo)
             element.addEventListener('dragover', this.dragovertwo)
             element.addEventListener('drop', this.droptwo)
         });
  
         this.container.addEventListener('dragstart', this.dragstarttwo);
         this.container.addEventListener('dragend', this.dragendtwo);
     }
     dragstarttwo(e) {
         this.classList.add('drag_starttwo');
        setTimeout(() => {
           this.classList.add('invisibletwo');
        }, 0);
     }
  
     dragendtwo(e) {
         console.log('dragendtwo');
         this.classList.remove('invisibletwo');
         this.classList.remove('drag_starttwo');
     }
  
     dragleavetwo(e) {
         console.log('dragleavetwo')
     }
  
     dragovertwo(e) {
         e.preventDefault();
         console.log('dragovertwo');
     }
  
     droptwo(){ 
     let container = document.querySelector('.filltwo'); 
     this.append(container);
     var emptytwo = document.getElementById("emptytwo");   
     var filltwo = document.getElementById("filltwo");
     if  (emptytwo.contains(filltwo)){
         console.log('emptytwo');
     }
 }
     static init() {
      return new this();
      }
  }
  class Draggablethree {
 
     constructor() {
         this.container = document.querySelector('.fillthree');
         
         this.boxthree = document.querySelectorAll('.startpointthree, .emptythree');
         
         this._addEventListener();
     }
  
     _addEventListener() {
         this.boxthree.forEach(element => {
             element.addEventListener('dragleave', this.dragleavethree)
             element.addEventListener('dragover', this.dragoverthree)
             element.addEventListener('drop', this.dropthree)
         });
  
         this.container.addEventListener('dragstart', this.dragstartthree);
         this.container.addEventListener('dragend', this.dragendthree);
     }
  
     dragstartthree(e) {
         this.classList.add('drag_startthree');
        setTimeout(() => {
           this.classList.add('invisiblethree');
        }, 0);
     }
  
     dragendthree(e) {
         console.log('dragendthree')
         this.classList.remove('invisiblethree');
         this.classList.remove('drag_startthree');
     }
  
     dragleavethree(e) {
         console.log('dragleavethree')
     }
  
     dragoverthree(e) {
         e.preventDefault();
         console.log('dragoverthree')
     }
  
     dropthree(){ 
         let container = document.querySelector('.fillthree'); 
         this.append(container);
         var emptythree = document.getElementById("emptythree");   
         var fillthree = document.getElementById("fillthree"); 
         if (emptythree.contains(fillthree)){
             console.log('emptythree');
         }
     }
     static init() {
      return new this();
      }
  }
  class Draggablefour {
 
     constructor() {
         this.container = document.querySelector('.fillfour');
         
         this.boxfour = document.querySelectorAll('.startpointfour, .emptyfour');
         
         this._addEventListener();
     }
  
     _addEventListener() {
         this.boxfour.forEach(element => {
             element.addEventListener('dragleave', this.dragleavefour)
             element.addEventListener('dragover', this.dragoverfour)
             element.addEventListener('drop', this.dropfour)
         });
  
         this.container.addEventListener('dragstart', this.dragstartfour);
         this.container.addEventListener('dragend', this.dragendfour);
     }
  
     dragstartfour(e) {
         this.classList.add('drag_startfour');
        setTimeout(() => {
           this.classList.add('invisiblefour');
        }, 0);
     }
  
     dragendfour(e) {
         console.log('dragendfour')
         this.classList.remove('invisiblefour');
         this.classList.remove('drag_startfour');
     }
  
     dragleavefour(e) {
         console.log('dragleavefour')
     }
  
     dragoverfour(e) {
         e.preventDefault();
         console.log('dragoverfour')
     }

     dropfour(){ 
        let container = document.querySelector('.fillfour'); 
        this.append(container);
        var emptyfour = document.getElementById("emptyfour");   
        var fillfour = document.getElementById("fillfour"); 
        if (emptyfour.contains(fillfour)){
            console.log('emptyfour');
        }
    }
    static init() {
     return new this();
     }
 }
 class Draggablefive {
 
    constructor() {
        this.container = document.querySelector('.fillfive');
        
        this.boxfive = document.querySelectorAll('.startpointfive, .emptyfive');
        
        this._addEventListener();
    }
 
    _addEventListener() {
        this.boxfive.forEach(element => {
            element.addEventListener('dragleave', this.dragleavefive)
            element.addEventListener('dragover', this.dragoverfive)
            element.addEventListener('drop', this.dropfive)
        });
 
        this.container.addEventListener('dragstart', this.dragstartfive);
        this.container.addEventListener('dragend', this.dragendfive);
    }
 
    dragstartfive(e) {
        this.classList.add('drag_startfive');
       setTimeout(() => {
          this.classList.add('invisiblefive');
       }, 0);
    }
 
    dragendfive(e) {
        console.log('dragendfive')
        this.classList.remove('invisiblefive');
        this.classList.remove('drag_startfive');
    }
 
    dragleavefive(e) {
        console.log('dragleavefive')
    }
 
    dragoverfive(e) {
        e.preventDefault();
        console.log('dragoverfive')
    }

    dropfive(){ 
       let container = document.querySelector('.fillfive'); 
       this.append(container);
       var emptyfive = document.getElementById("emptyfive");   
       var fillfive = document.getElementById("fillfive"); 
       if (emptyfive.contains(fillfive)){
           console.log('emptyfive');
       }
   }
   static init() {
    return new this();
    }
}
class Draggablesix {
 
    constructor() {
        this.container = document.querySelector('.fillsix');
        
        this.boxsix = document.querySelectorAll('.startpointsix, .emptysix');
        
        this._addEventListener();
    }
 
    _addEventListener() {
        this.boxsix.forEach(element => {
            element.addEventListener('dragleave', this.dragleavesix)
            element.addEventListener('dragover', this.dragoversix)
            element.addEventListener('drop', this.dropsix)
        });
 
        this.container.addEventListener('dragstart', this.dragstartsix);
        this.container.addEventListener('dragend', this.dragendsix);
    }
 
    dragstartsix(e) {
        this.classList.add('drag_startsix');
       setTimeout(() => {
          this.classList.add('invisiblesix');
       }, 0);
    }
 
    dragendsix(e) {
        console.log('dragendsix')
        this.classList.remove('invisiblesix');
        this.classList.remove('drag_startsix');
    }
 
    dragleavesix(e) {
        console.log('dragleavesix')
    }
 
    dragoversix(e) {
        e.preventDefault();
        console.log('dragoversix')
    }

    dropsix(){ 
       let container = document.querySelector('.fillsix');  
       this.append(container);
       var emptysix = document.getElementById("emptysix");   
       var fillsix = document.getElementById("fillsix"); 
       if (emptysix.contains(fillsix)){
           console.log('emptysix');
       }
   }
   static init() {
    return new this();
    }
}
class Draggableseven {
 
    constructor() {
        this.container = document.querySelector('.fillseven');
        
        this.boxseven = document.querySelectorAll('.startpointseven, .emptyseven');
        
        this._addEventListener();
    }
 
    _addEventListener() {
        this.boxseven.forEach(element => {
            element.addEventListener('dragleave', this.dragleaveseven)
            element.addEventListener('dragover', this.dragoverseven)
            element.addEventListener('drop', this.dropseven)
        });
 
        this.container.addEventListener('dragstart', this.dragstartseven);
        this.container.addEventListener('dragend', this.dragendseven);
    }
 
    dragstartseven(e) {
        this.classList.add('drag_startseven');
       setTimeout(() => {
          this.classList.add('invisibleseven');
       }, 0);
    }
 
    dragendseven(e) {
        console.log('dragendseven')
        this.classList.remove('invisibleseven');
        this.classList.remove('drag_startseven');
    }
 
    dragleaveseven(e) {
        console.log('dragleaveseven')
    }
 
    dragoverseven(e) {
        e.preventDefault();
        console.log('dragoverseven')
    }

    dropseven(){ 
       let container = document.querySelector('.fillseven'); 
       this.append(container);
       var emptyseven = document.getElementById("emptyseven");   
       var fillseven = document.getElementById("fillseven"); 
       if (emptyseven.contains(fillseven)){
           console.log('emptyseven');
       }
   }
   static init() {
    return new this();
    }
}
class Draggableeight {
 
    constructor() {
        this.container = document.querySelector('.filleight');
        
        this.boxeight = document.querySelectorAll('.startpointeight, .emptyeight');
        
        this._addEventListener();
    }
 
    _addEventListener() {
        this.boxeight.forEach(element => {
            element.addEventListener('dragleave', this.dragleaveeight)
            element.addEventListener('dragover', this.dragovereight)
            element.addEventListener('drop', this.dropeight)
        });
 
        this.container.addEventListener('dragstart', this.dragstarteight);
        this.container.addEventListener('dragend', this.dragendeight);
    }
 
    dragstarteight(e) {
        this.classList.add('drag_starteight');
       setTimeout(() => {
          this.classList.add('invisibleeight');
       }, 0);
    }
 
    dragendeight(e) {
        console.log('dragendeight')
        this.classList.remove('invisibleeight');
        this.classList.remove('drag_starteight');
    }

    dragleaveeight(e) {
        console.log('dragleaveeight')
    }
 
    dragovereight(e) {
        e.preventDefault();
        console.log('dragovereight')
    }

    dropeight(){ 
       let container = document.querySelector('.filleight'); 
       this.append(container);
       var emptyeight = document.getElementById("emptyeight");   
       var filleight = document.getElementById("filleight"); 
       if (emptyeight.contains(filleight)){
           console.log('emptyeight');
       }
   }
   static init() {
    return new this();
    }
}
class Draggablenine {
 
    constructor() {
        this.container = document.querySelector('.fillnine');
        
        this.boxnine = document.querySelectorAll('.startpointnine, .emptynine');
        
        this._addEventListener();
    }
 
    _addEventListener() {
        this.boxnine.forEach(element => {
            element.addEventListener('dragleave', this.dragleavenine)
            element.addEventListener('dragover', this.dragovernine)
            element.addEventListener('drop', this.dropnine)
        });
 
        this.container.addEventListener('dragstart', this.dragstartnine);
        this.container.addEventListener('dragend', this.dragendnine);
    }
 
    dragstartnine(e) {
        this.classList.add('drag_startnine');
       setTimeout(() => {
          this.classList.add('invisiblenine');
       }, 0);
    }
 
    dragendnine(e) {
        console.log('dragendnine')
        this.classList.remove('invisiblenine');
        this.classList.remove('drag_startnine');
    }
 
    dragleavenine(e) {
        console.log('dragleavenine')
    }
 
    dragovernine(e) {
        e.preventDefault();
        console.log('dragovernine')
    }

    dropnine(){ 
       let container = document.querySelector('.fillnine'); 
       this.append(container);
       var emptynine = document.getElementById("emptynine");   
       var fillnine = document.getElementById("fillnine"); 
       if (emptynine.contains(fillnine)){
           console.log('emptynine');
       }
   }
   static init() {
    return new this();
    }
}
class Draggableten {
 
    constructor() {
        this.container = document.querySelector('.fillten');
        
        this.boxten = document.querySelectorAll('.startpointten, .emptyten');
        
        this._addEventListener();
    }
 
    _addEventListener() {
        this.boxten.forEach(element => {
            element.addEventListener('dragleave', this.dragleaveten)
            element.addEventListener('dragover', this.dragoverten)
            element.addEventListener('drop', this.dropten)
        });
 
        this.container.addEventListener('dragstart', this.dragstartten);
        this.container.addEventListener('dragend', this.dragendten);
    }
 
    dragstartten(e) {
        this.classList.add('drag_startten');
       setTimeout(() => {
          this.classList.add('invisibleten');
       }, 0);
    }
 
    dragendten(e) {
        console.log('dragendten')
        this.classList.remove('invisibleten');
        this.classList.remove('drag_startten');
    }
 
    dragleaveten(e) {
        console.log('dragleaveten')
    }
 
    dragoverten(e) {
        e.preventDefault();
        console.log('dragoverten')
    }

    dropten(){ 
       let container = document.querySelector('.fillten'); 
       this.append(container);
       var emptyten = document.getElementById("emptyten");   
       var fillten = document.getElementById("fillten"); 
       if (emptyten.contains(fillten)){
           console.log('emptyten');
       }
   }
   static init() {
    return new this();
    }
}
class Draggableeleven {
 
    constructor() {
        this.container = document.querySelector('.filleleven');
        
        this.boxeleven = document.querySelectorAll('.startpointeleven, .emptyeleven');
        
        this._addEventListener();
    }
 
    _addEventListener() {
        this.boxeleven.forEach(element => {
            element.addEventListener('dragleave', this.dragleaveeleven)
            element.addEventListener('dragover', this.dragovereleven)
            element.addEventListener('drop', this.dropeleven)
        });
 
        this.container.addEventListener('dragstart', this.dragstarteleven);
        this.container.addEventListener('dragend', this.dragendeleven);
    }
 
    dragstarteleven(e) {
        this.classList.add('drag_starteleven');
       setTimeout(() => {
          this.classList.add('invisibleeleven');
       }, 0);
    }
 
    dragendeleven(e) {
        console.log('dragendeleven')
        this.classList.remove('invisibleeleven');
        this.classList.remove('drag_starteleven');
    }
 
    dragleaveeleven(e) {
        console.log('dragleaveeleven')
    }
 
    dragovereleven(e) {
        e.preventDefault();
        console.log('dragovereleven')
    }

    dropeleven(){ 
       let container = document.querySelector('.filleleven'); 
       this.append(container);
       var emptyeleven = document.getElementById("emptyeleven");   
       var filleleven = document.getElementById("filleleven"); 
       if (emptyeleven.contains(filleleven)){
           console.log('emptyeleven');
       }
   }
   static init() {
    return new this();
    }
}
  

 document.addEventListener('load', Draggableone.init());
 document.addEventListener('load', Draggabletwo.init());
 document.addEventListener('load', Draggablethree.init());
 document.addEventListener('load', Draggablefour.init());
 document.addEventListener('load', Draggablefive.init());
 document.addEventListener('load', Draggablesix.init());
 document.addEventListener('load', Draggableseven.init());
 document.addEventListener('load', Draggableeight.init());
 document.addEventListener('load', Draggablenine.init());
 document.addEventListener('load', Draggableten.init());
 document.addEventListener('load', Draggableeleven.init());

 let dropalert = Draggableone.init() + Draggabletwo.init() + Draggablethree.init() + Draggablefour.init() + Draggablefive.init() + Draggablesix.init() + Draggableseven.init() + Draggableeight.init() + Draggablenine.init() + Draggableten.init() + Draggableeleven.init();
if (dropalert == true)  { alert ("You won the game"); }
