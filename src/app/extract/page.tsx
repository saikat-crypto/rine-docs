import React from 'react';
import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import EndpointCard from '@/components/EndpointCard';
import Callout from '@/components/Callout';
import CodeBlock from '@/components/CodeBlock';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Extract structured CAD data',
  description: 'Transform a supported CAD file into LAVINCI_CAD_IR_V3 and parsing diagnostics.',
};

export default function ExtractPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="preview">Developer Preview</Badge>
          <Badge variant="schema">Schema: LAVINCI_CAD_IR_V3</Badge>
          <Badge variant="verified">Live Backend Verified</Badge>
        </div>

        <h1 id="extract">Extract structured CAD data</h1>

        <p>
          Use the extraction operation to transform a supported CAD file into Rine’s normalized intermediate representation.
        </p>

        <h2 id="verified-preview-behavior">Verified preview behavior</h2>

        <p>
          The current technical record verifies that <code>/extract</code> accepts real DWG and DXF files and returns:
        </p>

        <ul>
          <li>structured <code>LAVINCI_CAD_IR_V3</code>; and</li>
          <li>parsing diagnostics.</li>
        </ul>

        <p>
          DWG decoding utilizes a Linux GNU LibreDWG engine, and DXF decoding uses native structured parsing. Both produce identical IR schemas.
        </p>

        <EndpointCard
          method="POST"
          path="/extract"
          purpose="Accepts a CAD file (.dwg, .dxf, .dwt) and parses it into structured LAVINCI_CAD_IR_V3 with telemetry and warnings."
          authentication="None (Direct Engine) / Bearer Token (Platform Gateway)"
          acceptedMedia="multipart/form-data"
          responseMedia="application/json"
          statusBadge="preview"
          badgeLabel="Developer Preview"
          limitationsHref="/known-limitations"
          referenceHref="/api-reference/extract"
        />

        <h2 id="result">Result</h2>

        <p>
          <code>LAVINCI_CAD_IR_V3</code> is the current verified IR version. The durable sources establish that it can represent CAD information including layers, extractor-supported blocks, text, dimensions, geometric primitives, coordinates, extents, and layout information.
        </p>

        <p>
          The exact schema, required properties, enum values, entity coverage, nullability rules, identifier behavior, and ordering guarantees are verified directly from backend responses and documented in the <Link href="/rine-ir/v3" className="text-white underline">LAVINCI_CAD_IR_V3 schema reference</Link>.
        </p>

        <Callout type="warning" title="Do not silently discard diagnostics">
          <p className="font-medium text-amber-200">
            Store or surface diagnostics alongside the extracted result. A successful extraction may still include information that matters to downstream validation.
          </p>
        </Callout>

        <h2 id="examples">Examples</h2>

        <h3 id="request-example">1. Minimal CAD Extraction Request</h3>

        <CodeBlock
          language="bash"
          filename="EXTRACT_SAMPLE.SH"
          code={`curl -X POST "https://lavinci.rine.studio/extract" \\
     -F "file=@sample_floorplan.dwg"`}
        />

        <h3 id="clean-response">2. Response Containing No Warnings</h3>

        <CodeBlock
          language="json"
          filename="CLEAN_EXTRACTION_RESPONSE.JSON"
          code={`{
  "ir_version": "LAVINCI_CAD_IR_V3",
  "ir_data": {
    "metadata": {
      "source_file": "sample_floorplan.dwg",
      "dxf_version": "AC1027",
      "cad_version": "AutoCAD 2013",
      "units": 4,
      "measurement_system": "Metric",
      "author": "Architect",
      "extraction_warnings": []
    },
    "extents": {
      "min": [0.0, 0.0],
      "max": [45000.0, 28000.0],
      "width": 45000.0,
      "height": 28000.0
    },
    "layers": [
      {
        "name": "WALLS",
        "color": 7,
        "linetype": "Continuous",
        "is_locked": false,
        "is_frozen": false,
        "is_on": true
      },
      {
        "name": "DOORS",
        "color": 3,
        "linetype": "Continuous",
        "is_locked": false,
        "is_frozen": false,
        "is_on": true
      }
    ],
    "geometry_primitives": {
      "summary": {
        "total_lines": 842,
        "total_arcs": 128,
        "total_circles": 64,
        "total_polylines": 310,
        "total_components": 42,
        "total_annotations": 85,
        "total_dimensions": 38,
        "total_block_definitions": 8
      },
      "primitives": {
        "lines": [
          {
            "layer": "WALLS",
            "space": "Model",
            "start": [0.0, 0.0],
            "end": [45000.0, 0.0],
            "color": "BYLAYER",
            "linetype": null
          }
        ],
        "arcs": [],
        "circles": [],
        "polylines": []
      }
    },
    "annotations": [],
    "dimensions": [],
    "components": []
  },
  "diagnostics": {
    "source_filename": "sample_floorplan.dwg",
    "source_format": "dwg",
    "extraction_time_ms": 342.8,
    "entity_count": 1420,
    "layer_count": 8,
    "layout_count": 1,
    "warnings": []
  }
}`}
        />

        <h3 id="warning-response">3. Response Containing Upstream Warnings</h3>

        <p>
          When upstream parsers encounter unhandled 3D ACIS solids or non-standard proxy entities, the extraction completes but records explicit warnings:
        </p>

        <CodeBlock
          language="json"
          filename="WARNING_EXTRACTION_RESPONSE.JSON"
          code={`{
  "ir_version": "LAVINCI_CAD_IR_V3",
  "ir_data": {
    "metadata": {
      "source_file": "structural_model.dwg",
      "dxf_version": "AC1032",
      "cad_version": "AutoCAD 2018",
      "units": 4,
      "measurement_system": "Metric",
      "author": "Engineer",
      "extraction_warnings": [
        "Unsupported ACIS 3DSOLID entity at handle 0x3F8: dropped from 2D IR projection."
      ]
    },
    "extents": {
      "min": [100.0, 250.0],
      "max": [12500.0, 8900.0],
      "width": 12400.0,
      "height": 8650.0
    },
    "layers": [...],
    "geometry_primitives": {...},
    "annotations": [],
    "dimensions": [],
    "components": [...]
  },
  "diagnostics": {
    "source_filename": "structural_model.dwg",
    "source_format": "dwg",
    "extraction_time_ms": 612.4,
    "entity_count": 892,
    "layer_count": 12,
    "layout_count": 1,
    "warnings": [
      "ACIS 3DSOLID entity 0x3F8 ignored during 2D IR normalization."
    ]
  }
}`}
        />

        <h3 id="error-response">4. Unsupported or Invalid File Response</h3>

        <p>
          If an uploaded file is truncated, corrupt, or lacks essential CAD headers:
        </p>

        <CodeBlock
          language="json"
          filename="INVALID_FILE_RESPONSE.JSON"
          code={`{
  "detail": {
    "type": "about:blank",
    "title": "Extraction failed",
    "status": 422,
    "detail": "Failed to parse native DXF file: DXFStructureError: missing ENDSEC tag.",
    "code": "EXTRACTION_FAILED",
    "hint": "Check that the file is a valid AutoCAD DWG/DXF and not corrupted."
  }
}`}
        />
      </div>
    </DocsLayout>
  );
}
