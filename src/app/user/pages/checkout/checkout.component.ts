import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, forkJoin, switchMap } from 'rxjs';
import { CoreUserService } from 'src/app/core/services/core-user.service';
import { Order } from '../../models/order';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutData : any
  currentPendingData : any
  public checkoutOrder : Order[] = []
  public itemTotalPrice : number = 0
  placeOrderData : any = []
  currentPendingOrders : any
 // newPendingOrders : Order[] =[]
  constructor(private userService : UserService, private router : Router, private coreUser : CoreUserService) { }

  ngOnInit(): void {
    
    this.userService.getCheckOutData().subscribe(data => {
      this.checkoutData = data
      this.checkoutOrder = this.checkoutData.checkouts
      console.log(this.checkoutOrder)
     
      
      for(let item of this.checkoutOrder){
        this.itemTotalPrice += item.price*item.quantity
        console.log(this.itemTotalPrice)
      }
    },
    // (error) => {
    //     if(error.status === 404){
    //       alert("No Items on this page")
    //     }
    //     else{
    //       alert("Something went wrong")
    //     }
    //   }
    ) 
  }

  placeOrder(){

    // let res1 = this.userService.getCheckOutData()
    // let res2 = this.userService.placeOrder(this.checkoutOrder)
    // forkJoin([res1, res2]).subscribe(res =>{
    //   this.checkoutData = res[0]
    //   this.checkoutOrder = this.checkoutData.checkouts
    //   this.placeOrderData = res[1]
    //   this.checkoutOrder = [...this.placeOrderData]
      
    // })



    // this.userService.getCheckOutData().subscribe((data) => {
      
    //   this.checkoutData = data
    //   this.checkoutOrder = this.checkoutData.checkouts
    //   console.log(this.checkoutOrder)
    // })

    // this.userService.getPendingOrder().subscribe((data :any) =>{
    //   this.currentPendingOrders = data.checkouts
    // })
    
    // let newPendingOrders = this.currentPendingOrders
    // this.currentPendingOrders.forEach((order) =>{
    //   newPendingOrders.push(order)
    // })
    // console.log(newPendingOrders)

 
    let res1 = this.userService.getCheckOutData()
    let res2 = this.userService.getPendingOrder()
  //   let newPendingOrders :any
  //   forkJoin([res1,res2]).subscribe( (data: any) =>{
  //     this.checkoutData = data[0]
  //     this.checkoutOrder = this.checkoutData.checkouts
  //     this.currentPendingOrders = data[1].pendingOrders
  //     console.log(this.currentPendingOrders)   
  //     console.log(this.checkoutOrder)
  //     if(this.currentPendingOrders.length == 0){
  //       newPendingOrders = this.currentPendingOrders
  //         this.currentPendingOrders.forEach((order) =>{
  //           newPendingOrders.push(order)
  //         })
  //         this.checkoutOrder.forEach((order) => {
  //           newPendingOrders.push(order)
  //         })
  //       }else{
  //         newPendingOrders = this.checkoutOrder
  //       }
       
  //     console.log(newPendingOrders)//may data
      
  //   })
  //   console.log(newPendingOrders)//walang data
  //   console.log(this.checkoutOrder)//may data
  //  this.userService.placeOrder(newPendingOrders).subscribe(data => console.log(data))

    forkJoin([res1, res2]).pipe(
      switchMap((data) =>{
        let newPendingOrders :any
        this.checkoutData = data[0]
            this.checkoutOrder = this.checkoutData.checkouts
            this.currentPendingData = data[1]
            this.currentPendingOrders = this.currentPendingData.pendingOrders
            console.log(this.currentPendingOrders)   
            console.log(this.checkoutOrder)
            if(this.currentPendingOrders.length !== 0){
              newPendingOrders = this.currentPendingOrders
                // this.currentPendingOrders.forEach((order : any) =>{
                //   newPendingOrders.push(order)
                // })
                this.checkoutOrder.forEach((order) => {
                  newPendingOrders.push(order)
                })
              }else{
                newPendingOrders = this.checkoutOrder
              }
             
            console.log(newPendingOrders)
        return this.userService.placeOrder(newPendingOrders)
      }),
      switchMap((data : any) =>{
        console.log(data)
        return this.userService.deleteCheckout()
      }),
      switchMap((data) => {
        return EMPTY
      }),
      catchError((err) => {
        if(err.status === 404){
         console.log(err.status)
        }
        return EMPTY
      })
    ).subscribe()

    this.router.navigate(["user/pending-orders"])
   
   
    // delete all the checkout item in db
  }

}
