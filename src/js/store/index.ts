import {List, Map, Record, RecordOf} from 'immutable';
import {applyMiddleware, createStore, Store} from 'redux';
import ReduxThunk from 'redux-thunk'; // redux-thunk lets us dispatch() functions to create async or multi-stage actions
import rootReducer from '../reducers'; // reducer/index.js returns combinedReducers();
import {DatasetRecord} from './factory/Dataset';
import {GuideRecord} from './factory/Guide';
import {Hints, HintsRecord} from './factory/Hints';
import {Inspector, InspectorRecord} from './factory/Inspector';
import {MarkRecord} from './factory/Mark';
import {Scene, SceneRecord} from './factory/marks/Scene';
import {PipelineRecord} from './factory/Pipeline';
import {ScaleRecord} from './factory/Scale';
import {defaultSignalState, SignalRecord} from './factory/Signal';
import {VegaReparse, VegaReparseRecord} from './factory/Vega';
import {Walkthrough, WalkthroughRecord} from './factory/Walkthrough';

export type VisStateTree = Map<string, SceneRecord |
      Map<string, PipelineRecord | DatasetRecord | ScaleRecord | GuideRecord | MarkRecord | SignalRecord>>;
export interface VisState {
  past: List<VisStateTree>;
  present: VisStateTree;
  future: List<VisStateTree>;
  filtered: boolean;
}

interface LyraState {
  vis: VisState;
  vega: VegaReparseRecord;
  inspector: InspectorRecord;
  walkthrough: WalkthroughRecord;
  hints: HintsRecord;
};

const getDefaultState = Record<LyraState>({
  vis: {
    past: List(),
    present: Map({
      pipelines: Map<string, PipelineRecord>(),
      datasets: Map<string, DatasetRecord>(),
      scene: Scene(),
      scales: Map<string, ScaleRecord>(),
      guides: Map<string, GuideRecord>(),
      marks: Map<string, MarkRecord>(),
      signals: defaultSignalState,
    }),
    future: List(),
    filtered: false
  },
  vega: VegaReparse(),
  inspector: Inspector(),
  walkthrough: Walkthrough(),
  hints: Hints()
});

export type State = RecordOf<LyraState>;

// Create immutable state
export const defaultState = getDefaultState();

function configureStore(initialState: State) {
  return createStore(rootReducer, initialState, applyMiddleware(ReduxThunk));
}

/**
 * This module exports the configured store as a singleton that can be required
 * from anywhere in Lyra
 * @type {Store}
 */
export const store: Store = configureStore(defaultState);
