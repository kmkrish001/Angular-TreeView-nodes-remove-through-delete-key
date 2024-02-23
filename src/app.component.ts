import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  BeforeOpenCloseMenuEventArgs,
  ContextMenuComponent,
  ContextMenuModule,
  MenuEventArgs,
  MenuItemModel,
  NodeClickEventArgs,
  TreeViewComponent,
  TreeViewModule,
} from '@syncfusion/ej2-angular-navigations';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { Component, Inject } from '@angular/core';

/**
 * Default TreeView Component
 */
@Component({
  standalone: true,
  imports: [CommonModule, CheckBoxModule, ListViewModule, TreeViewModule],
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  // Hierarchical data source for TreeView component
  public hierarchicalData: Object[] = [
    {
      id: '01',
      name: 'Local Disk (C:)',
      expanded: true,
      subChild: [
        {
          id: '01-01',
          name: 'Program Files',
          subChild: [
            { id: '01-01-01', name: 'Windows NT' },
            { id: '01-01-02', name: 'Windows Mail' },
            { id: '01-01-03', name: 'Windows Photo Viewer' },
          ],
        },
        {
          id: '01-02',
          name: 'Users',
          expanded: true,
          subChild: [
            { id: '01-02-01', name: 'Smith' },
            { id: '01-02-02', name: 'Public' },
            { id: '01-02-03', name: 'Admin' },
          ],
        },
        {
          id: '01-03',
          name: 'Windows',
          subChild: [
            { id: '01-03-01', name: 'Boot' },
            { id: '01-03-02', name: 'FileManager' },
            { id: '01-03-03', name: 'System32' },
          ],
        },
      ],
    },
    {
      id: '02',
      name: 'Local Disk (D:)',
      subChild: [
        {
          id: '02-01',
          name: 'Personals',
          subChild: [
            { id: '02-01-01', name: 'My photo.png' },
            { id: '02-01-02', name: 'Rental document.docx' },
            { id: '02-01-03', name: 'Payslip.pdf' },
          ],
        },
        {
          id: '02-02',
          name: 'Projects',
          subChild: [
            { id: '02-02-01', name: 'Blazor Application' },
            { id: '02-02-02', name: 'TypeScript Application' },
            { id: '02-02-03', name: 'React Application' },
          ],
        },
        {
          id: '02-03',
          name: 'Office',
          subChild: [
            { id: '02-03-01', name: 'Work details.docx' },
            { id: '02-03-02', name: 'Weekly report.docx' },
            { id: '02-03-03', name: 'Wishlist.csv' },
          ],
        },
      ],
    },
    {
      id: '03',
      name: 'Local Disk (E:)',
      icon: 'folder',
      subChild: [
        {
          id: '03-01',
          name: 'Pictures',
          subChild: [
            { id: '03-01-01', name: 'Wind.jpg' },
            { id: '03-01-02', name: 'Stone.jpg' },
            { id: '03-01-03', name: 'Home.jpg' },
          ],
        },
        {
          id: '03-02',
          name: 'Documents',
          subChild: [
            { id: '03-02-01', name: 'Environment Pollution.docx' },
            { id: '03-02-02', name: 'Global Warming.ppt' },
            { id: '03-02-03', name: 'Social Network.pdf' },
          ],
        },
        {
          id: '03-03',
          name: 'Study Materials',
          subChild: [
            { id: '03-03-01', name: 'UI-Guide.pdf' },
            { id: '03-03-02', name: 'Tutorials.zip' },
            { id: '03-03-03', name: 'TypeScript.7z' },
          ],
        },
      ],
    },
  ];
  // Mapping TreeView fields property with data source properties
  public field: Object = {
    dataSource: this.hierarchicalData,
    id: 'id',
    text: 'name',
    child: 'subChild',
    htmlAttributes: 'hasAttribute',
  };

  @ViewChild('treevalidate') treeObj: TreeViewComponent;

  public onKeyUp(args) {
    if (args.code == 'Delete') {
      this.treeObj.removeNodes([args.target]);
    }
  }
}
