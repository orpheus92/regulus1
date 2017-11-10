import { Widget } from '@phosphor/widgets';
import { DocumentRegistry } from '@jupyterlab/docregistry';
import { NotebookPanel, INotebookModel } from '@jupyterlab/notebook';
export declare class CycleCanvas extends Widget {
    constructor(panel: NotebookPanel, context: DocumentRegistry.IContext<INotebookModel>);
    dragEnter(): void;
    dragLeave(): void;
    dragOver(): void;
    dragDrop(): void;
}
