package keeper

import (
	"github.com/slandymani/odin-workshop/x/oracle/types"
)

var _ types.QueryServer = Keeper{}
