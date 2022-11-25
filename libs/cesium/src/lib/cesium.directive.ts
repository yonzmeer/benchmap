import { Directive, ElementRef, OnInit } from '@angular/core';
import { Viewer, SceneMode, WebMapTileServiceImageryProvider } from 'cesium';

@Directive({
  selector: '[bnpCesium]',
})
export class CesiumDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    new Viewer(this.elementRef.nativeElement, {
      sceneMode: SceneMode.SCENE2D,
      animation: false,
      baseLayerPicker: false,
      fullscreenButton: false,
      homeButton: false,
      infoBox: false,
      sceneModePicker: false,
      geocoder: false,
      timeline: false,
      selectionIndicator: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      imageryProvider: new WebMapTileServiceImageryProvider({
        url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/WMTS/tile/1.0.0/USGSTopo/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}',
        layer: 'USGSTopo',
        style: 'default',
        format: 'image/jpeg',
        tileMatrixSetID: 'default028mm',
      }),
    });
  }
}
