import { Component, OnInit } from '@angular/core';
import{Cliente} from './cliente'
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private ClienteService:ClienteService) {

  
   }

  ngOnInit() {
  this.ClienteService.getClientes().subscribe(
    clientes =>this.clientes=clientes
  );
  }

  delete(cliente:Cliente): void {

    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.ClienteService.delete(cliente.id).subscribe(
            response => {
              this.clientes=this.clientes.filter(cli=> cli!==cliente);
              swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

            }
        )
    
      }
    })

  }

}
