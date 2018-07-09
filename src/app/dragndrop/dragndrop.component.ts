import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.scss']
})
export class DragndropComponent implements OnInit {
  private sourceContainerId;
  private dragBackgrd = false;
  constructor() { }

  ngOnInit() {
  }

  dragStart(e) {
    this.cancel(e);
    try {
      e.dataTransfer.setData('text/plain', e.target.id);
    } catch(ex) {
      e.dataTransfer.setData('Text', e.target.id);
    }
    this.sourceContainerId = e.target.parentElement.id;
  }

  dragOver(e) {
    this.cancel(e);
    e.dataTransfer.dropEffect = "copy";
    console.log('dragover called!!');
  }

  dragEnter(e) {
    this.cancel(e);
    this.dragBackgrd = true;
  }

  dragleave(e) {
    this.cancel(e);
    this.dragBackgrd = false;
  }

  cancel(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('cancel called!');

  }

  dropped(e) {
    this.cancel(e);
    const target = e.target;
    let content = '';
    const types = e.dataTransfer.types;

    if(types[0].length > 0) {
      if(types[0] === 'Text') {
        target.innerText = e.dataTranfer.getData('Text');
      }
      else if(types[0] !== 'Files') {
        types.forEach((type) => {
          content = e.dataTransfer.getData(type);
          let p = document.createElement('p');
          p.innerHTML = '<b>Type:</b> ' + type + '<br>' + '<b>Content:</b>' + content;
          target.appendChild(p);
        });
      }
      else if(types[0] === 'Files') {
        const files = e.dataTransfer.files;
        for(const file of files) {
          let p = document.createElement('p');
          p.innerHTML = `<b>Type: </b><span>File</span><br>
                         <b>Name: </b>${file.name}<br>
                         <b>Size: </b>${file.size}<br>
                         <b>Last Modified Date: </b>${file.lastModifiedDate}<br><br>`;
          target.appendChild(p);
        }
      }
      this.dragBackgrd = false;
      console.log('drop successful');
    }
  }




}
