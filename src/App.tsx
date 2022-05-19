import React from 'react';
import './App.css';
import {CarouselComponent, CarouselItemsDirective, CarouselItemDirective} from '@syncfusion/ej2-react-navigations';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
function App() {
  const itemTemplate1=()=> (
    <figure className="img-container">
      <img src="https://ej2.syncfusion.com/products/images/carousel/cardinal.png" alt="cardinal" style={{ height: "100%", width: "100%" }} />
    </figure>
  );
  const itemTemplate2=()=> (
    <figure className="img-container">
      <img src="https://ej2.syncfusion.com/products/images/carousel/hunei.png" alt="hunei" style={{ height: "100%", width: "100%" }} />
    </figure>
  );
  const itemTemplate3=()=> (
    <figure className="img-container">
      <img src="https://ej2.syncfusion.com/products/images/carousel/costa-rica.png" alt="costa-rica" style={{ height: "100%", width: "100%" }} />
    </figure>
  );
  const itemTemplate4=()=> (
    <figure className="img-container">
      <img src="https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png" alt="kaohsiung" style={{ height: "100%", width: "100%" }} />
    </figure>
  );
  const itemTemplate5=()=> (
    <figure className="img-container">
      <img src="https://ej2.syncfusion.com/products/images/carousel/bee-eater.png" alt="bee-eater"  style={{ height: "100%", width: "100%" }} />
    </figure>
  );
  const customPrevBtn=()=>(
    <ButtonComponent className='e-btn' cssClass='e-flat e-round' iconCss='e-icons e-chevron-left-double'></ButtonComponent>
  );
  const customNextBtn=()=>(
    <ButtonComponent className='e-btn' cssClass='e-flat e-round' iconCss='e-icons e-chevron-right-double'></ButtonComponent>
  );
  const birds = ['cardinal', 'hunei', 'costa-rica', 'kaohsiung', 'bee-eater'];
  const customIndicators=(props:any)=>{
    return(
      <div className='indicator'>
        <img src={`https://ej2.syncfusion.com/react/demos/src/carousel/images/${birds[props.index]}.png`} alt="image" style={{ height: "100%", width: "100%" }}/>
      </div>
    );
  }
  let btnObj: ButtonComponent;
  let carouselObj: CarouselComponent;
  const btnClick=()=>{
    if(carouselObj.autoPlay){
      btnObj.content = "Play";
      carouselObj.autoPlay = false;
    }else{
      btnObj.content = "Pause";
      carouselObj.autoPlay = true;
    }
  }
  const customPlayBtn=()=>(
    <ButtonComponent ref={((btn:ButtonComponent)=>btnObj=btn)} className='e-btn' content='Pause' onClick={btnClick}></ButtonComponent>
  );
  return (
    <div className="App">
      <div className='carousel-sample'>
        <CarouselComponent ref={((c:CarouselComponent)=>carouselObj=c)} cssClass='default-carousel'
          previousButtonTemplate={customPrevBtn}
          nextButtonTemplate={customNextBtn}
          indicatorsTemplate={customIndicators}
          interval={2000}
          animation={{effect:"None"}}
          showPlayButton={true}
          playButtonTemplate={customPlayBtn}
          loop={true}
          autoPlay={true}>
          <CarouselItemsDirective>
            <CarouselItemDirective template={itemTemplate1} />
            <CarouselItemDirective template={itemTemplate2} />
            <CarouselItemDirective template={itemTemplate3} />
            <CarouselItemDirective template={itemTemplate4} />
            <CarouselItemDirective template={itemTemplate5} />
          </CarouselItemsDirective>
        </CarouselComponent>
      </div>
    </div>

  );
}

export default App;
