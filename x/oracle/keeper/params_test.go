package keeper_test

import (
	"testing"

	testkeeper "github.com/slandymani/odin-workshop/testutil/keeper"
	"github.com/slandymani/odin-workshop/x/oracle/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.OracleKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
