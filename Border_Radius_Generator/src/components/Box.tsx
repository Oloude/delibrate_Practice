type BoxProps = {
    borderRadius : {
        'top-left' : number,
      'top-right' : number,
      'bottom-left' : number,
      'bottom-right' : number,
    }
    children :  JSX.Element
}

function Box({borderRadius, children}:BoxProps) {
   
   const styles = {
    borderTopLeftRadius : `${borderRadius["top-left"]}px`,
    borderTopRightRadius : `${borderRadius["top-right"]}px`,
    borderBottomLeftRadius : `${borderRadius["bottom-left"]}px`,
    borderBottomRightRadius : `${borderRadius["bottom-right"]}px`,
   }

  return (
    <div className="bg-stone-500 w-full h-80 m-10  p-4 sm:10 lg:p-20" style={styles}>
       {children}
    </div>
  )
}

export default Box