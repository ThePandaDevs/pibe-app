import { DataFilterComponent } from './DataFilterComponent';
import { NavBarApp } from '../../navbar/NavBarApp';
import { CardData } from '../applicants_grid/ApplicantsCard';
import { PaginatorData } from '../../paginator_data/PaginatorData';


export const DataViewHome = () => {

  return(
    <>
      <div className='h-max' style={{background:'#EAF3FB'}}>
        <NavBarApp/>

        <div className="my-6 lg:mx-8">
          <DataFilterComponent/>
        </div>

        <div className="flex justify-content-center flex-wrap my-5 lg:mx-7 ">
          <div className="grid mx-2 lg:mx-0">
            {[...Array(6).keys()].map((e, i) =>{
              return(
                <div className="col-12 md:col-6 lg:col-4 my-1 px-2 lg:px-5" key={i}>
                  <CardData/>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex justify-content-center flex-wrap card-container pb-6">
          <PaginatorData/>
        </div>
      </div>
    </>
  )
}