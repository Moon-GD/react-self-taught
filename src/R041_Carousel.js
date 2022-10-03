import 'bootstrap/dist/css/bootstrap.min.css';  // reactstrap css 파일
import React, {useState} from 'react';
import {
	Carousel,
    CarouselCaption,
    CarouselControl,
    CarouselIndicators,
    CarouselItem
} from 'reactstrap';

// 슬라이더 내부 아이템들 생성
const items = [
	{
    	src: 'https://picsum.photos/id/123/1200/400',
        altText: 'altText for slide 01',
        caption: 'slide 01',
        header: 'header for slide 01',
        key: 1
    },
    {
    	src: 'https://picsum.photos/id/456/1200/400',
        altText: 'altText for slide 02',
        caption: 'slide 02',
        header: 'header for slide 02',
        key: 2
    },
    {
    	src: 'https://picsum.photos/id/789/1200/400',
        altText: 'altText for slide 03',
        caption: 'slide 03',
        header: 'header for slide 03',
        key: 3
    }
]

function MakeCarousel () {
	const [index, setIndex] = useState(0);  // 첫 번째 아이템을 기본 프레임으로 활용
    const [animating, setAnimating] = useState(false);

	// 이전 슬라이드로 넘기는 핸들러
	const prev = () => {
    	// 슬라이더가 움직이는 상황이면 return
    	if(animating) return;
        
        const prevIndex = index === 0 ? items.length - 1 : index - 1;
        setIndex(prevIndex);
    }
    
    // 다음 슬라이드로 넘기는 핸들러
    const next = () => {
    	// 슬라이더가 움직이는 상황이면 return
    	if(animating) return;
        
        const nextIndex = items.length - 1 ===  index ? 0 : index + 1;
        setIndex(nextIndex);
    }
    
    // 원하는 슬라이드로 넘기는 핸들러 (Indicators)
    const goToIndex = (newIndex) => {
    	if(animating) return;
        setIndex(newIndex);
    }
    
    // items -> CarouselItem 으로 변환
    const slides = items.map((item) => {
    	return(
        	<CarouselItem
            	onExiting={ () => {setAnimating(true)} }
                onExited = { () => {setAnimating(false)} }
                key = { item.key }
            >
            	<img src={item.src} alt={item.altText}/>            
                <CarouselCaption
                	captionHeader = {item.header}
                    captionText = {item.caption}
                />
                
            </CarouselItem>
        )
    })
    
    return (
    	<Carousel
        	activeIndex={index}
            previous={prev}
            next={next}
        >
        
        <CarouselIndicators
        	items={items}
            activeIndex={index}
            onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
        	direction="prev"
            directionText="왼쪽 화살표입니다."
            onClickHandler={prev}
        />
        
        <CarouselControl
        	direction="next"
            directionText='오른쪽 화살표입니다.'
        	onClickHandler={next}
        />
        
        
        </Carousel>
    )
}

export default MakeCarousel;
// 이후 App.js에서 import 해서 사용하면 된다.