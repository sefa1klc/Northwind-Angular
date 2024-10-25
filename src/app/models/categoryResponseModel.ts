import {ResponseModel} from "./responseModel";
import {Category} from "./category";

export interface CategoryRespondModel extends ResponseModel {
  data:Category[]
}
