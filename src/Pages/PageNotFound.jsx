import FuzzyText from '../Components/FuzzyText'

function PageNotFound() {
    const hoverIntensity = 0.5; 
  const enableHover = true;
  return (
    <>
    <FuzzyText 
  baseIntensity={0.2} 
  hoverIntensity={hoverIntensity} 
  enableHover={enableHover}
>
  404
  Not Found
</FuzzyText>
    </>
  )
}

export default PageNotFound