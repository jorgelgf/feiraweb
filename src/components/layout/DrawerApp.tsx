export const DrawerApp = () => {

  const classNameDiv = 'h1 w-4 border-1 border-b-2 border-zinc-500 h-2 '
  return (

    <div className='cursor-pointer border-2 border-white p-3 rounded-md hover:shadow-md'>
      <div className={classNameDiv} > </div>
      <div className={classNameDiv}></div>
      <div className={classNameDiv}></div>
    </div>
  )
}