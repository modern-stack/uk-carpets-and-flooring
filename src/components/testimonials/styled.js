import styled from 'styled-components'

const Testimonials = styled.div`
  width: 100%;
  position: relative;
  margin: 2% 0;
`

const Title = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  text-transform: uppercase;
  margin-bottom: 30px;
`

const Carousel = styled.div`
  min-height: 10vh;
  position: relative;
  margin: 60px 0;
`

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Slide = styled.div`
  width: ${props => (props.visible ? '100%' : 0)};
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.2s ease-in;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex: space-between;
  flex-wrap: wrap;

  & > div {
    flex: 1;
  }
`

const SlideSelection = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0 60px 0;
`

const SlideSelector = styled.div`
  width: 30px;
  height: 5px;
  margin: 0 4px;
  background-color: ${props =>
    props.selected ? 'rgb(199, 0, 43, 1)' : 'grey'};

  cursor: ${$ => ($.selected ? 'cursor' : 'pointer')};
  z-index: 1;
  transition: color 1s ease-in;
`

const Testimonial = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  & > div {
    :first-child {
      grid-row: span 2;
    }

    :last-child {
      grid-row: span 2;
    }

    :nth-child(2) {
      grid-column: span 3;
    }

    :nth-child(4) {
      grid-column: span 3;
      display: flex;
      align-items: center;
    }
  }
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;

  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
`

const Image = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`

const Details = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Profile = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  border-right: 1px solid #ccc;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  height: 10px;
  justify-content: center;

  & > div {
    flex: 1;
  }
`

export {
  Testimonials,
  Title,
  Carousel,
  Slide,
  SlideSelection,
  SlideSelector,
  Testimonial,
  Image,
  Content,
  Details,
  Profile,
  TestimonialContainer,
}
